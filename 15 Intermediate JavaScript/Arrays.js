var guestList = ["Mrunmai","Sangram","Bhagyashri","Pramila","Shahrukh","Salman"];
var gname = prompt("What is your name?");

if(guestList.includes(gname)){
    alert("Welcome "+gname);
}
else{
    alert("Sorry, maybe next time!");
}