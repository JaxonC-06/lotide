const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// The function takes the value, and returns the key associated with the value in the object.
// Loop through object. If value is present, return key.
// If no value, return undefined.

const myFavShowsByGenre = {
  sci_fi: "Lost",
  comedy: "The Office",
  drama: "This Is Us",
  action: "Prison Break"
};

assertEqual(findKeyByValue(myFavShowsByGenre, "Prison Break"), "action"); // This should pass.
assertEqual(findKeyByValue(myFavShowsByGenre, "Arcane League of Legends"), undefined); // This should pass.
assertEqual(findKeyByValue(myFavShowsByGenre, "Lost"), "drama"); //This should fail.
assertEqual(findKeyByValue(myFavShowsByGenre, "This Is Us"), "drama") // This should pass.