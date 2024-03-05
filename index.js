//practice class code ;

let ticketPriceForKids = 50;

let ticketPriceForAdults = 70;

let ticketPriceForAged = "entry free";

let age = +prompt("please enter your age "); // + sign convert string to a number

console.log(age);

if (age <= 3) {
    console.log("your entry is free");
}
else if (age > 3 && age <= 12) {
    console.log("your ticket price is", ticketPriceForKids);
}
else if (age >= 13 && age <= 50) {
    console.log("your ticket price is", ticketPriceForAdults);
    document.write("<h2>your ticket price is", ticketPriceForAdults, "</h2>");
}
else if (age > 50) {
    console.log("your entry is free");
    document.write("<h2> your entry is free </h2>");
}
else {
    console.log("you entered an invalid number");
    document.write("<h2> you entered an invalid number </h2>");
}

// assignment chap 9 to 11 ;

//   Question 1

let cityName = prompt("enter a city name");

if (cityName === "karachi"){

    console.log("welcome to the city of light");
    document.write( "<h2> welcome to the city of light  </h2>");

} else {

    console.log("welcome to " , cityName );

    document.write("<h2> welcome to " , cityName ,  " </h2> ");
}

//   Question 2

let gender = prompt(" enter your gender ");

if ( gender === "male"){

    console.log("Good Morning sir");

   document.write (" <h2>  Good Morning Sir </h2>");

}
else if ( gender === "female"){

    console.log("Good Morning maa'm");

   document.write (" <h2> Good Morning maa'm </h2>");

} else {
    console.log("you re entered wrong gender");

    document.write (" <h2> you re entered wrong gender </h2>");
}

//   Question 3

document.write("<h1> Traffic Signal Rules.")

let redColor = "Must stop.";

let yellowColor = "Ready To Move."

let greenColor = "Move Now.";

let signalColors = prompt("Enter A Signal Color");

document.write("<h2> You Entered " , signalColors , ". </h2>" );

if (signalColors === "red"){

    document.write ("<h2>" , redColor , "</h2>" )
}
else if (signalColors === "yellow"){

    document.write ("<h2>" , yellowColor , "</h2>" )
}
else if (signalColors === "green"){

    document.write ("<h2>" , greenColor , "</h2>" )
}else {

    document.write("<h2> Color Must Be Red Yellow Or Green. </h2>" )

}

//   Question 4

let carFuel = prompt("Enter Your Remaining Car Fuel");

if (carFuel < 0.25) {

    document.write(" <h2>  Please Refill The Fuel In Your Car.  <h2> ");

}else if (carFuel > 0.25 ) {

    document.write(" <h2> Your Fuel Is " , carFuel , " litres. Please Refill Your Car Fuel before 0.25 litres.  <h2> ");

}

//   Question 5

let a = 82;

if ( ++a === 83 ){
    console.log("Given Condition Of Variable Is true");

}else {

    console.log("Given Condition Of Variable Is false");
}

let b = 72;

if ( b++ === 73 ){
    console.log("Given Condition Of Variable Is true");

}else {

    console.log("Given Condition Of Variable Is false");
}

let c = 60;

if (c++ === 61){

    console.log("Given Condition Of Variable Is True");

}

if (++c === 62){

    console.log("Given Condition Of Variable Is true");

}
if (c === 62) {

    console.log("Given Condition Of Variable Is true");

}
if (c <= 63) {

    console.log("Given Condition Of Variable Is true");

}

if (++c <= 63) {

    console.log("Given Condition Of Variable Is true");

}

var materialCost = 18500;

var laborCost = 1000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){

alert("The cost equals");

}
if (true){

alert("True");

}
if (false){

alert("False");

}

if ("car" < "cat"){
    alert("car is smaller then cat");
}

//   Question 6

document.write("<h1> MarkSheet </h3>");

let totalMarks = 300;

document.write(" <h2> Total Marks : " , totalMarks , " </h2> " );

let subject_1 = +prompt("Enter Obtained Marks Of Subject 1");

let subject_2 = +prompt("Enter Obtained Marks Of Subject 2");

let subject_3 = +prompt("Enter Obtained Marks Of Subject 3");

obtainedMark = subject_1 + subject_2 + subject_3 ;

document.write(" <h2> Obtained Marks : " , obtainedMark , " </h2> " );

let percentage = (obtainedMark / totalMarks) * 100 ;

document.write("<h2> Percentage : " , percentage , " % </h2>");

if ( percentage >= 80 ){

    document.write(" <h2> Your Grade Is : A-One </h2>");

    document.write(" <h2> Remark : Exellent </h2>");

} else if ( percentage >= 70){

    document.write(" <h2> Your Grade Was : A </h2>");

    document.write(" <h2> Remark : Good </h2>");
}
else if (percentage >= 60){

    document.write(" <h2> Your Grade Was : B </h2>");

    document.write(" <h2> Remark : You Need To Improve </h2>")
}
else if (percentage <= 60){

    document.write(" <h2> You're : Fail </h2>");

    document.write(" <h2> Remark : Sorry </h2>");
}

//   Question 7

let number = 7 ;

let guessNumber = +prompt ("Enter A Number From 1 to 10");

if (guessNumber === 7 ){

    document.write ("BINGO! Correct Answer");
} if (guessNumber === 6){
    document.write("Close enough to the correct answer");
}

//   Question 8

let num = +prompt(
  "enter any number i will tell you the number is completly divided by 3"
)

if (num % 3 ===  0 ) {

  console.log("number is divisible by 3");
  
}else{

    console.log("number is not divisible of 3");

}

//   Question 9


let Num = +prompt("Enter A Number I Will Tell You The Number Is Odd Or Even");

if (Num % 2 === 0){

    console.log(Num, " is even ");

}else if (Num % 2 !== 0){

    console.log(Num, " is odd ");

}

//   Question 10

let T = prompt("Enter Your City Temperature");

if (T > 40){

    console.log("It is too hot outside.");
}
else if (T > 30){

    console.log("The Weather today is Normal.");
}

else if (T > 20){

    console.log("Today’s Weather is cool.");
}

else if (T > 10){

    console.log("OMG! Today’s weather is so Cool.");
}
else if ( T < 10 ){
    console.log("OMG! Today’s weather is so so so Cool. ")
}

//   Question 11

let num1 =  parseInt(prompt(" enter number one ")); //parseint also convert string to a number;

let num2 =  parseInt(prompt(" enter number two "));

let myCalcu = prompt("please enter a arithmetic operator");

if ( myCalcu === "+" ){

    console.log( num1 , "+" , num2 , "=" , num1 + num2 );

    document.write ( "<h2>" , num1 , " + " , num2 , " = " , num1 + num2 , "</h2>" );
}
else if ( myCalcu === "-" ){

    console.log( num1 , " - " , num2 , " = " , num1 - num2 );

    document.write ( num1 , " - " , num2 , " = " , num1 - num2 );
}
else if ( myCalcu ===  "*" ){

    console.log( num1 , " * " , num2 , " = " , num1 * num2 );

    document.write ( "<h2>" , num1 , " * " , num2 , " = " , num1 * num2 , "</h2>" );
}
else if ( myCalcu === "/" ){

    console.log( num1 , " / " , num2 , " = " , num1 / num2 );

    document.write ( "<h2>" , num1 , " / " , num2 , " = " , num1 / num2 , "</h2>" );

} else if (myCalcu === "%") {

    console.log(num1 , " % " , num2 , " = " , num1 % num2);

   document.write ("<h2>" , num1 , " % " , num2 , " = " , num1 % num2 , "</h2>")
}
else{
    console.log("you entered an invalid number");

    document.write("you entered an invalid number");

}
