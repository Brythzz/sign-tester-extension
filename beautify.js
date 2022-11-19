const beautifyText = async () => {
    const text = document.querySelector('textarea');
    let output = text.value
        .replaceAll(/\n+/g, ' ')
        .trim()
        .split('');

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

    if (lineCount === 1 || lineCount === 2)
        output.splice(0, 0, '\n');

    text.value = output.join('');
    await updateText(text.value);
}

const initBeautifyButton = () => {
    const button = document.querySelector('#beautify-button');
    button.addEventListener('click', beautifyText);
}
