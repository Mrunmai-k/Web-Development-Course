//Manipulating style
$("h1").addClass("big-title");      //adds class

$("h1").removeClass("big-title");   //removes class

$("h1").hasClass("big-title"); //returns boolean

//Manipulating text
$("h1").text("Bye");    //changes text

$("button").text("Don't click me");     //changes text for all the buttons

$("button").html("<em>Hey</em>");    //changes innerHTML

//Manipulating attributes

console.log($("img").attr("src"));

$("a").attr("href","https://yahoo.com");
