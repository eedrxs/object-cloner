function deepClone(item) {
  //  Deeply clones an object or array

  return JSON.parse(JSON.stringify(item));
}

module.exports = deepClone;
