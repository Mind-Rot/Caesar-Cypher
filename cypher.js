function caesarCypher(str, rot) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + rot) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + rot) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }