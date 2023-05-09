const cipher = {
  encode: function (offset, text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const asciiNumb = text[i].charCodeAt();

      if (asciiNumb + offset >= 65 && asciiNumb + offset <= 90) {
        result += String.fromCharCode(asciiNumb + offset);
      }
      else if (asciiNumb + offset > 90) {
        result += String.fromCharCode((asciiNumb + offset - 65) % 26 + 65);
      }
      else {
        result += text[i];
      }
    }
    return result;
  },
  decode: function (offset, text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const asciiNumb = text[i].charCodeAt();

      if (asciiNumb - offset >= 65 && asciiNumb - offset <= 90) {
        result += String.fromCharCode(asciiNumb - offset);
      }
      else if (asciiNumb - offset < 65) {
        const paddingLeft = (asciiNumb - 65)
        const movementsFromRight = (offset - paddingLeft - 1) % 26
        result += String.fromCharCode(90 - movementsFromRight);
      }
    }
    return result;
  },
};

export default cipher;
