const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail(words).length, 2); // This test checks the length of the returned array.

assertEqual(tail(["Test"]).length, 0); //This checks if an array with only one element returns as empty, which it should.
assertEqual(tail([]).length, 0); // This checks if an array with zero elements returns as empty, which it also should.