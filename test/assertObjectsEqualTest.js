const assertObjectsEqual = require("../assertObjectsEqual.js");

const vehicle1 = {year: "2024", company: "toyota", lineup: "tundra"};
const vehicle2 = {company: "toyota", lineup: "tundra", year: "2024"};
const vehicle3 = {year: "2021", company: "Ford", lineup: "F-150"};
const vehicle4 = {years: ["2021", "2022", "2024"], company: "Ford"};
const vehicle5 = {years: ["2021", "2022", "2024"], company: "Ford"};

assertObjectsEqual(vehicle1, vehicle2);
assertObjectsEqual(vehicle2, vehicle3);
assertObjectsEqual(vehicle3, vehicle4);
assertObjectsEqual(vehicle4, vehicle5);