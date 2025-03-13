const without = function(source, itemsToRemove) {
  const filteredArr = [];

  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;

    for (const item of itemsToRemove) {
      if (item === source[i]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      filteredArr.push(source[i]);
    }
  }

  return filteredArr;
};

module.exports = without;

