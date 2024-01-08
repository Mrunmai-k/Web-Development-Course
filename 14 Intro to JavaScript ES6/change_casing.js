// String functions slice, toLowerCase, toUpperCase

var urname = prompt("What is your name?");

var firstChar = urname.slice(0,1);
var firstCharToUpper = firstChar.toUpperCase();

var restChar = urname.slice(1,urname.length);
var restCharToLower = restChar.toLowerCase();

var capitalisedName = firstCharToUpper + restCharToLower;

console.log("Hello, "+capitalisedName);