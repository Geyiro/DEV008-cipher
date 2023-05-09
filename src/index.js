import cipher from './cipher.js';

const inputForEncode = document.getElementById("input-text-encode");
const encodeOffset = document.getElementById("offset-for-encode");
const encodeButton = document.getElementById("encode-button");
const encodedText = document.getElementById("output-text-encode");
//to uppercase input
inputForEncode.addEventListener("input", () => {
    inputForEncode.value = inputForEncode.value.toUpperCase();
});
// calling encode function
encodeButton.addEventListener("click", () => {
    const result = cipher.encode(parseInt(encodeOffset.value), inputForEncode.value);
    encodedText.value = result;
});

const inputForDecode = document.getElementById("input-text-decode");
const decodeOffset = document.getElementById("offset-for-decode");
const decodeButton = document.getElementById("decode-button");
const decodedText = document.getElementById("output-text-decode");

//to uppercase input decode
decodeButton.addEventListener("input", () => {
    inputForDecode.addEventListener() = inputForDecode.value.toUpperCase();
});
// calling decode function
decodeButton.addEventListener("click", () => {
    const result = cipher.decode(parseInt(decodeOffset.value), inputForDecode.value);
    decodedText.value = result;
});

//funcion para copiar outputtext de ventana encode
const copyToClipboard = document.getElementById("copyToClipboard");

copyToClipboard.addEventListener("click", async function () {
    await navigator.clipboard.writeText(encodedText.value);
    alert("textCopy");
});

