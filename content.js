chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        const translation = document.getElementById('translation')?.value;
        sendResponse(translation);
    }
);
