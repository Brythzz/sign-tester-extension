const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.scale(2, 2);

const concat = args => {
    return Array.prototype.concat(...args);
}

const setWarningVisibility = (active) => {
    const warning = document.querySelector('.warning');
    warning.style.opacity = active;
}

const importCrowdinString = () => {
    browser.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (!tabs[0]?.url.includes('crowdin.com')) return;

        browser.tabs.sendMessage(tabs[0].id, null, response => {
            if (response) {
                input.value = response;
                saveString(response);
                drawText(response);
            }
        });
    });
}

const saveString = string => {
    browser.storage.local.set({ text: string });
}

const getUnicodeCharData = charCode => {
    const [start, end] = unicodeChars[charCode];

    const startX = charCode % 16 * 16 + start;
    const startY = Math.floor(charCode / 16) * 16 % 256;

    const width = end + 1 - start;
    const pageId = Math.floor(charCode / 256);

    return { startX, startY, width, pageId };
}

const initCanvas = async () => {
    await new Promise(resolve => {
        const image = new Image(144, 72);
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
            resolve();
        }
        image.src = 'sign.png';
    });
}

const drawAsciiChar = (charCode, x, y) => {
    const charCanvas = document.createElement('canvas');
    charCanvas.width = canvas.width;
    charCanvas.height = canvas.height;

    const { w, d } = asciiChars[charCode];
    const charData = concat(d);

    let imageData = new ImageData(new Uint8ClampedArray(charData), w);
    charCanvas.getContext('2d').putImageData(imageData, 0, 0);

    ctx.drawImage(charCanvas, x, y);
}

const drawUnicodeChar = ({ startX, startY, width, pageId }, x, y) => {
    ctx.filter = 'invert(1)';

    ctx.drawImage(images[pageId],
        startX, startY,
        width, 16,
        x, y,
        width / 2, 8
    );

    ctx.filter = 'invert(0)';
}

const marginLeft = 3;
const marginTop = 4;

let lineOverflow = [0,0,0,0];
let textOverflow = false;

const lineOverflowing = () => !!lineOverflow.reduce((a,b) => a+b);

const drawText = async text => {
    await initCanvas();
    let currentY = marginTop;

    const lines = text.replaceAll(/\u00a7[0-9a-fklmnor]/g, '').split('\n');
    for (let k in lines) {
        const line = lines[k];

        // Overflow detection
        if (currentY > 34) {
            setWarningVisibility(1);
            textOverflow = true;
            break;
        }
        if (!lineOverflowing())
            setWarningVisibility(0);
        textOverflow = false;

        let currentX = marginLeft;
        const charsToDraw = [];

        for (let char of line) {
            const charCode = char.charCodeAt();

            // Unsupported character
            if (charCode > 65536) continue;

            let charWidth = asciiChars[charCode]?.w
                || (unicodeChars[charCode][1] + 1 - unicodeChars[charCode][0]) / 2;

            // Unsupported character
            if (!charWidth) continue;

            // Overflow detection
            if (currentX + charWidth + 1 > 94) {
                setWarningVisibility(1);
                lineOverflow[k] = 1;
                break;
            }
            if (!textOverflow && !lineOverflowing())
                setWarningVisibility(0);
                lineOverflow[k] = 0;

            charsToDraw.push(charCode);
            currentX += charWidth + 1;
        }

        const offsetX = Math.max(Math.floor((94 - currentX) / 2), 0);

        currentX = marginLeft;
        for (let charCode of charsToDraw) {
            const asciiChar = asciiChars[charCode];

            if (asciiChar) {
                const { w, t } = asciiChar;
                drawAsciiChar(charCode, currentX + offsetX, currentY + t);
                currentX += w + 1;
            }
            else {
                const charData = getUnicodeCharData(charCode);
                drawUnicodeChar(charData, currentX + offsetX, currentY);
                currentX += charData.width / 2 + 1;
            }
        }

        currentY += 10;
    }
}

const fetchGlyphs = async () => {
    const path = browser.runtime.getURL('font/glyph_sizes.bin');
    const res = await fetch(path);
    return await res.arrayBuffer();
}

const loadGlyphs = async () => {
    const buf = await fetchGlyphs();
    const bytes = new Int8Array(buf);
    for (let i in bytes) {
        const byte = bytes[i];
        unicodeChars[i] = [byte >> 4, byte & 0x0f];
    }
}

const noPage = n => (n == 8) || (n >= 216 && n <= 248);

const loadImages = async () => {
    for (let i = 0; i < 256; i++) {
        if (noPage(i)) continue;

        let pageId = (i).toString(16);
        if (pageId.length < 2) pageId = '0' + pageId;

        const image = new Image(256, 256);
        image.src = browser.runtime.getURL(`font/unicode_page_${pageId}.png`);
        images[i] = image;
    }
}

const initImportButton = async () => {
    const button = document.querySelector('button');
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });

    const isOnCrowdin = tabs[0]?.url.includes('crowdin.com');

    if (isOnCrowdin)
        button.addEventListener('click', importCrowdinString);
    else
        button.disabled = true;
}

const initTextArea = async input => {
    input.addEventListener('input', () => {
        if (!input.value) setWarningVisibility(0);

        saveString(input.value);
        drawText(input.value);
    });
}

const unicodeChars = Array(65536);
const images = Array(256);

const loadText = async input => {
    const { text } = await browser.storage.local.get(['text']);
    const translation = text || '';
    input.value = translation;
}

(async () => {
    const input = document.querySelector('textarea');
    initImportButton();

    await Promise.all(
        [loadGlyphs(), loadImages(), loadText(input)]
    )

    initTextArea(input);
    drawText(input.value);
})();
