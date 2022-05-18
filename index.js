const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.scale(2, 2);

const concat = (...args) => {
    return Array.prototype.concat(...args);
}

const setWarningVisibility = (active) => {
    const warning = document.querySelector('.warning');
    warning.style.opacity = active ? 1 : 0;
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

const drawChar = (char, currentX, currentY) => {
    const charCanvas = document.createElement('canvas');
    charCanvas.width = canvas.width;
    charCanvas.height = canvas.height;

    const { w, d } = chars[char.charCodeAt()];
    const charData = concat(...d);

    let imageData = new ImageData(new Uint8ClampedArray(charData), w);
    charCanvas.getContext('2d').putImageData(imageData, 0, 0);

    ctx.drawImage(charCanvas, currentX, currentY);
}

const marginLeft = 3;
const marginTop = 4;

let lineOverflow = [0,0,0,0];
let textOverflow = false;

const lineOverflowing = () => !!lineOverflow.reduce((a,b) => a+b);

const drawText = async (text) => {
    await initCanvas();
    let currentY = marginTop;

    const lines = text.split('\n');
    for (let k in lines) {
        const line = lines[k];

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
            const charWidth = chars[char.charCodeAt()]?.w;

            // Unsupported character
            if (!charWidth) continue;

            if (currentX + charWidth + 1 > 93) {
                setWarningVisibility(1);
                lineOverflow[k] = 1;
                break;
            }
            if (!textOverflow && !lineOverflowing())
                setWarningVisibility(0);
                lineOverflow[k] = 0;

            charsToDraw.push(char);
            currentX += charWidth + 1;
        }

        const offsetX = Math.max(Math.floor((94 - currentX) / 2), 0);

        currentX = marginLeft;
        for (let char of charsToDraw) {
            const { w, t } = chars[char.charCodeAt()];
            drawChar(char, currentX + offsetX, currentY + t);

            currentX += w + 1;
        }

        currentY += 10;
    }
}

const input = document.querySelector('textarea');
input.addEventListener('input', () => {
    if (input.value.length === 0) setWarningVisibility(0);

    saveString(input.value);
    drawText(input.value);
});

const button = document.querySelector('button');

browser.tabs.query({ active: true, currentWindow: true }, tabs => {
    const isOnCrowdin = tabs[0]?.url.includes('crowdin.com');
    if (isOnCrowdin) button.addEventListener('click', importCrowdinString);
    else button.disabled = true;
});

browser.storage.local.get(['text'], ({ text }) => {
    const translation = text || '';
    input.value = translation;
    drawText(translation);
});
