function rot13(str) {
  if (typeof str !== "string")
    throw new Error("Type non valide\n le type doit etre un string");
  if (str.length > 1 || str.length === 0)
    throw new Error("La taille du string doit etre de 1 ");

  const loweredStr = str.toLowerCase();
  const unicode = loweredStr.charCodeAt();
  if (unicode >= 110) return String.fromCharCode(unicode - 13);
  return String.fromCharCode(unicode + 13);
}

module.exports = rot13;
