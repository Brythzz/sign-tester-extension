const beautifyText = async () => {
    const text = document.querySelector('textarea');
    const centerVertically = document.querySelector('#center-vertically').checked;
    const newlinesFill = document.querySelector('#newlines-fill').checked;

    let output = text.value.split('');

    if (!output.length)
        return;

    let i = 0;
    let lastSeparator = -1;
    let currentX = marginLeft;
    let lineCount = 1;

    while (i < output.length) {
        const char = output[i];

        if (char === ' ')
            lastSeparator = i;
        else if (char === '\n') {
            lineCount++;
            lastSeparator = -1;
            i++;
            currentX = 0;
            continue;
        }

        const charCode = char.charCodeAt(0);
        if (charCode > 65536) {
            i++;
            continue;
        }

        let charWidth = asciiChars[charCode]?.w
            || (unicodeChars[charCode][1] + 1 - unicodeChars[charCode][0]) / 2;
        if (!charWidth) {
            i++;
            continue;
        }

        if (currentX + charWidth + 1 > 93) {
            if (lastSeparator === -1) {
                output.splice(i, 0, '\n');
                i++;
            } else {
                output[lastSeparator] = '\n';
                i = lastSeparator + 1;
                lastSeparator = -1;
            }
            currentX = 0;
            lineCount++;
            continue;
        }

        currentX += charWidth + 1;
        i++;
    }

    if (centerVertically && (lineCount === 1 || lineCount === 2)) {
        output.splice(0, 0, '\n');
        lineCount++;
    }

    if (newlinesFill && lineCount < 4) {
        output.splice(output.length, 0, '\n'.repeat(4 - lineCount));
    }

    text.value = output.join('');
    await updateText(text.value);
}

const initBeautify = async () => {
    const button = document.querySelector('#beautify-button');
    button.addEventListener('click', beautifyText);

    const CVInput = document.querySelector('#center-vertically');
    const NFInput = document.querySelector('#newlines-fill');

    const { centerVertically, newlinesFill } = await browser.storage.local.get(['centerVertically', 'newlinesFill']);

    CVInput.checked = centerVertically === undefined ? true : centerVertically;
    NFInput.checked = newlinesFill;

    CVInput.addEventListener('change', (n) => {
        browser.storage.local.set({ centerVertically: n.target.checked });
    });

    NFInput.addEventListener('change', (n) => {
        browser.storage.local.set({ newlinesFill: n.target.checked });
    });
}
