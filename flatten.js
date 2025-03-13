const flatten = function(arr) {
  const flatArr = [];

  for (const i of arr) {
    if (Array.isArray(i)) {
      for (const j of i) {
        flatArr.push(j);
      }
    }
    if (!Array.isArray(i)) {
      flatArr.push(i);
    }
  }

  return flatArr;
};

module.exports = flatten;