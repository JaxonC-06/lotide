# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@jaxonc_06/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(firstArray, secondArray)`: Receives two arrays as parameters. The function compares both arrays and logs a message saying that the arrays are equal, or a message that the arrays are not equal.

- `assertEqual(actual, expected)`: Receives two parameters, actual and expected. The function compares two primitive values and passes either an 'Assertion Passed' or an 'Assertion Failed' message.

- `assertObjectsEqual(actual, expected)`: Receives two parameters, actual and expected. The function compares two objects and passes either an 'Assertion Passed' or an 'Assertion Failed' message.

- `countLetters(string)`: Receives one parameter, a string. The function creates an object for the given string, with each letter being a key, and the values being the number of times the letter occurs in the string. Spaces are ignored.

- `countOnly(allItems, itemsToCount)`: Receives two parameters, an array of items, and an object containing the items in the initial array to count. The function receives a collection of items and returns counts for the items given in itemsToCount, only if the items have a truthy value.

- `eqArrays(firstArray, secondArray)`: Receives two arrays as parameters. The function compares both arrays, and returns a boolean if they are identical, or if they are different.

- `eqObjects(object1, object2)`: Receives two parameters, both being objects. The function compares both objects, and returns a boolean if they are identical, or if they are different.

- `findKey(object, callback)`: Receives two parameters, an object and a callback function. The findKey function returns the first key for which the callback returns truthy.

- `findKeyByValue(object, value)`: Receives two parameters, an object and a primitive value. The function takes the value and returns the specific key that the value belongs to in object.

- `head(array)`: Receives one parameter, an array. The function returns the first element in the given array.

- `letterPositions(string)`: Receives one parameter, a string. The function returns an object where each key is a letter in the string, and it's corresponding value is the an array containing the index or indices where the letter is found in string. Spaces are not counted.

- `middle(array)`: Receives one parameter, an array. The function returns the middle element, or elements, of a given array.

- `tail(array)`: Receives one parameter, an array. The function returns a new array containing all elements of the original array EXCEPT for the first element.

- `takeUntil(array, callback)`: Receives two parameters, an array and a callback function. The function returns a new array with the elements for the first array until the callback produces a truthy value.

- `without(source, itemsToRemove)`: The function receives two parameters, a source array, and an array with items to remove. The function iterates over the source array and returns an array without the items in the itemsToRemove array.