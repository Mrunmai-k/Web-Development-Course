var numbers = [3, 56, 2, 41, 5];

// forEach
var newNumbers1 = [];

// anonymous function
numbers.forEach(function (x){
    newNumbers1.push(x*3);
});

console.log(newNumbers1);

// -------------------------------------------------------------------------------------------

// Map Function - create a new array by doing some operation on each array item 
// It overcomes the problem of creating a empty array then pushing each item into array (forEach)

const newNumbers2 = numbers.map(function (x){
    return x * 2;
});

console.log(newNumbers2);

// -------------------------------------------------------------------------------------------

// Filter - create a new array by keeping the items that returns true.

const newNumbers3 =  numbers.filter(function (num){
    return(num > 10);
})

console.log(newNumbers3);

// -------------------------------------------------------------------------------------------

// Reduce - Accumulate a value by doing some operation to each array item

var newNumbers4 = numbers.reduce(function (accumulator, currentNumber){
    // console.log("accumulator: "+accumulator);
    // console.log("currentNumber: "+currentNumber);
    return accumulator + currentNumber;
})

console.log(newNumbers4);

// -------------------------------------------------------------------------------------------

// find - returns the first item that matches the condition from an array.

const newNumbers5 =  numbers.find(function (num){
    return num > 10;
})

console.log(newNumbers5);

// -------------------------------------------------------------------------------------------

// find - returns the index of first item that matches the condition from an array.

const newNumbers6 =  numbers.findIndex(function (num){
    return num > 10;
})

console.log(newNumbers6);



// import emojipedia from "./emojipedia"
// const newEmojipedia = emojipedia.map(function (emojiEntry){
//     return emojiEntry.meaning.substring(0,100)
// })

// console.log(newEmojipedia);




