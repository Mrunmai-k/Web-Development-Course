//Don't add () otherwise it will call the method everytime open the browser and not only after clicking the button.
// document.querySelector("button").addEventListener("click", handleClick); 
// function handleClick() {
//     alert("I got clicked!");
// }

//or write an anonymous function
// document.querySelector("button").addEventListener("click", function handleClick() {
//     alert("I got clicked!");
// }); 

var noOfDrumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < noOfDrumButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick() {
        alert("I got clicked!");
    });
}