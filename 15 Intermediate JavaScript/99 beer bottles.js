var n = 99;

function beer(){
    while(n >= 1){
        console.log(n+" bottles of beer on the wall, "+n+" bottles of beer.");
        n--;
        console.log("Take one down and pass it around, "+n+" bottles of beer on the wall.");
    }
}

beer();