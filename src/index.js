import cipher from './cipher.js';

const inputTextElement = document.getElementById("input-text");
const offsetElement = document.getElementById("offset");
const outputTextElement = document.getElementById("output-text");

//to uppercase input
inputTextElement.addEventListener("input", () => {
  inputTextElement.value = inputTextElement.value.toUpperCase();
});


const encodeButton = document.getElementById("encode-button");

if (encodeButton) {
  // calling encode function
  encodeButton.addEventListener("click", () => {
    const result = cipher.encode(parseInt(offsetElement.value), inputTextElement.value);
    outputTextElement.value = result;
  });
}

//funcion para copiar outputtext de ventana encode
const copyToClipboard = document.getElementById("copyToClipboard");

if (copyToClipboard) {
  copyToClipboard.addEventListener("click", async function () {
    await navigator.clipboard.writeText(outputTextElement.value);
    alert("textCopy");
  });
}


const decodeButton = document.getElementById("decode-button");

if (decodeButton) {
  // calling decode function
  decodeButton.addEventListener("click", () => {
    const result = cipher.decode(parseInt(offsetElement.value), inputTextElement.value);
    outputTextElement.value = result;
  });
}

