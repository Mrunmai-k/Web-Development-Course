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
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });
}