const middle = function(arr) {
  const middleOfArray = [];

  if (arr.length === 1 || arr.length === 2) {
    return middleOfArray;
  }

  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    middleOfArray.push(arr[middleIndex - 1], arr[middleIndex]);
  } else {
    middleOfArray.push(arr[middleIndex]);
  }

  return middleOfArray;
};

module.exports = middle;