/**
 *
 * @param {String} str
 * @returns {String}
 */

function reverseString(str) {
  if (typeof str !== "string")
    throw new Error("Type non valide\n le type doit etre un string");
  return str.split("").reverse().join("");
}

module.exports = reverseString