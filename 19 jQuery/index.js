//Manipulating style
$("h1").addClass("big-title");      //adds class

$("h1").removeClass("big-title");   //removes class

$("h1").hasClass("big-title"); //returns boolean
$("h1").addClass("big-title"); 

//Manipulating text
$("h1").text("Bye");    //changes text

$("button").text("Don't click me");     //changes text for all the buttons

$("button").html("<em>Hey</em>");    //changes innerHTML

//Manipulating attributes

console.log($("img").attr("src"));

$("a").attr("href","https://yahoo.com");

//Adding EventListener 
$("h1").click(function(){
    $("h1").css("color","purple");
});

$("button").click(function(){
    $("h1").css("color","yellow");
});

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseenter",function(){
    $("h1").css("background-color", "lightgray");
})

// Adding elements

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// Removing elements

$("a").remove();

// Animations
$("button").on("click",function(){
    $("h1").hide();
});

$("h1").show();

$("input").on("mouseover",function(){
    $("h1").toggle();
});

$("button").on("click",function(){
    $("img").fadeOut();
});

$("img").fadeIn();

$("input").on("mouseover",function(){
    $("img").fadeToggle();
});

// slideUp-slideDown is same as hide-show fadeOut-fadeIn

$("button").on("click",function(){
    $("h1").animate({opacity: 0.5});  //works only when the value is numeric and not text. e.g color
});

