const letterPositions = function(sentence) {
  let lowerCaseSentence = sentence.toLowerCase();
  const results = {};

  for (let i = 0; i < lowerCaseSentence.length; i++) {
    let letter = lowerCaseSentence[i];

    if (letter === " ") {
      continue;
    } else if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;