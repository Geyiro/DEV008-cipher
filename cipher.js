const cipher = {
  encode: function (offset, text) {
    if (offset === null || offset === 0 || offset === undefined) {
      throw new TypeError('offset is not valid');
    }

    let result = "";
    for (let i = 0; i < text.length; i++) {
      const asciiNumb = text[i].charCodeAt();

      if (asciiNumb < 65 || asciiNumb > 90) {
        result += text[i];
      }

      else if (asciiNumb + offset >= 65 && asciiNumb + offset <= 90) {
        result += String.fromCharCode(asciiNumb + offset);
      }
      else if (asciiNumb + offset > 90) {
        result += String.fromCharCode((asciiNumb + offset - 65) % 26 + 65);
      }
    }
    return result;
  },

  decode: function (offset, text) {
    if (offset === null || offset === 0 || offset === undefined) {
      throw new TypeError('offset is not valid');
    }
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const asciiNumb = text[i].charCodeAt();

      if (asciiNumb < 65 || asciiNumb > 90) {
        result += text[i];
      }
      else if (asciiNumb - offset >= 65 && asciiNumb - offset <= 90) {
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
