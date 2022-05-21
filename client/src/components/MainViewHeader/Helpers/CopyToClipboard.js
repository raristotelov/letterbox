const copyToClipboard = (copiedElementId) => {
    const textToCopy = document.getElementById(copiedElementId).innerText;
    const textAreaEl = document.createElement('textarea');
    textAreaEl.value = textToCopy;
    textAreaEl.setAttribute('readonly', '');

    document.body.appendChild(textAreaEl);
    textAreaEl.select();
    document.execCommand('copy');
    document.body.removeChild(textAreaEl);
};

export default copyToClipboard;