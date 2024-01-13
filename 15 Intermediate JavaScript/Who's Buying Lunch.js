/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.
*/

function whosPaying(names) {
    var pos = Math.random() * names.length;
    pos = Math.floor(pos);
    
    return names[pos]+" is going to buy lunch today!";
}

var names = ["Mrunmai","Sangram","Bhagyashri","Pramila","Shahrukh","Salman"];
console.log(whosPaying(names));