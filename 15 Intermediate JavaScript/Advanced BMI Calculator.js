/*
BMI Calculator Advanced (IF/ELSE)
Write a function that outputs (returns) a different message depending on the BMI.
BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

The message MUST be returned as an output from your function. 
*/


function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation = "";
    if(bmi < 18.5)
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    else if(bmi>=18.5 && bmi<=24.9)
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
    else if(bmi>=25 && bmi<=29.9)
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    else if(bmi>=30 && bmi<=34.9)
        interpretation = "Your BMI is "+bmi+", so you are obese.";
    else
        interpretation = "Your BMI is "+bmi+", so you are extremely obese.";
    return interpretation;
}

var weight = prompt("Enter the weight");
var height = prompt("Enter the height");
alert(bmiCalculator(weight,height));
