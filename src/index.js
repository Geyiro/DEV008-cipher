import cipher from './cipher.js';

const input = document.getElementById('inputMessage');
const offset = document.getElementById('offset');
const encodeButton = document.getElementById("encodeButton");
const textarea = document.getElementById('outputMessage');



encodeButton.addEventListener("click", () => {
    console.log({ textarea, input, offset })
    const result = cipher.encode(parseInt(offset.value), input.value);
    textarea.value = result;
});


//funcion para copiar outputtext
const copyToClipboard = document.querySelector('#copyToClipboard');

copyToClipboard.addEventListener('click', async function () {
    await navigator.clipboard.writeText(textarea.value);
    alert("textCopy");
});

