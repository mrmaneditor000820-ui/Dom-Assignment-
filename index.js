
// BOM   --> Browser object model
// Read only(OK)

// DOM  -->

// Alert
// window.alert("Hi")
// alert("")

// variables  -->  greek word     vary-(change) and ables(able)

 var name = "Nelson";   // --> assign (Nelson)  
 const myName = "Nelson";

 console.log(myName,name)

 // null is the value 
 // undefined  data type

//  var var = "NM"  // reserved
// variable name conventions

//1. pascal case
//2. camel case
//3. snake case
//4.train case
// console.log(firstName)  // temporal dead zone  (don't use (console.log) before decalaration/initialization a variable)
// let firstName = "Rthore";
// chapter
 
// Data types in JS
// Primitive data types
// 1. string
// 2. number
// 3. boolean   
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt
// Non-primitive data types
// 1. Object    
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error 
// 7. Map
// 8. Set
// 9. WeakMap
// 10. WeakSet
// 11. Promise
// 12. etc
// typeof operator

// post and  pre increments
 var a = 1;
 var b = 1;

//  var total = ++b + ++b + ++a + ++a;
 var total = a++ + ++b + ++a + b++ + a + b
            //1 +   2  +  3  + 2   + 3 + 3;
 console.log(total)

//concatenate twostrings together by using template literls
//template literls  is the modern way to work with strings in Js    
//  var name = "Nelson";
//  var lastName = prompt("enter your last name");
//  console.log(`Hi ${name} ${lastName}`)

//  // assignment  

// var x = prompt("where does the pope  live");
// if(x == "vatican") {
//     alert("correct!");
// }
// if(x !== "Vatican") {
//     alert("wrong!");
// }

// console.log(symbol)
// console.log(x); // ReferenceError: x is not defined
// let value = prompt("Kuch likho");

// if (value === null) {
//   console.log("null");   // exam / simple answer
// } else {
//   console.log(value);
// }

// var arr = []

// arr[200] = "ali"
// arr[150] = "asad"
// arr[139] = "don't touch"
// console.log(arr[arr.length-51])
// alert(arr[arr.length-62])
// // console.log([150])


// var marks = 40;
// if (marks <= 50) {
// alert("You are Pass");
// } else {
// alert("You are Fail");
// }
// let grade = 75; // Example grade

// if (grade >= 80) {
//  alert("A Grade");
// } else if (grade <= 60) {
//  alert("B Grade"); // This code runs if grade is less than 80 but 60 or more
// } else {
//  alert("C Grade"); // This code runs if grade is less than 60
// }

var grade = 85;


// if (grade >= 80) {
// alert("A Grade");
// } else if (grade >= 60) {
// alert("B Grade");
// } else {
// alert("C Grade");
// }


// let age = 5;


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j])
//     }
//     console.log(firstNames[i] + lastNames[j])
// }


// var uname = prompt("enter your name");
// var arr = ["saad", "ali","bilal", "asad"]
// var unameInLower = uname.toLowerCase()

// for(var i = 0; i<arr.length; i++){
//     if(unameInLower == "ali") {
//         console.log(unameInLower,"milgaya")
//     }
//     else("sorry not found")


// steps of solve specfic problems is called algorthims
// var text = "World War II"
 
// for( var i = 0; i<text.length; i++) {
//     if(text.slice(i,i + 12) === "World War II"){
//         text = text.slice(0,i) + "The second War "  +  text.slice(i + 12)
//     }
//     console.log("text==>",text)
// }
// var textChar = text.indexOf("word War II");
// console.log(textChar)

// let text = "I like apples and apples.";
// let newText = text.replace("apples", "oranges");
// // Result: "I like oranges and apples."
// console.log ( newText)

// var age = prompt("enter age")
// var newAge = parseInt(age) + 10;

// console.log(newAge)

//functions 

// function myFunction(num1,num2)  {
//     // var result = num1 + num2;
//     return num1 + num2
// }

// console.log(myFunction(2,3))


var mName = "Ali"
function test() {
    mName = "in function"
}


test()
mName = "Khan"
console.log("name==>",mName)


//switch statement

//if else for complex logic or multiple condition


//switch 
// simple logic 
// simple condition


// var age = prompt("enter age")
// switch (age) {
//     case 10:
//         console.log("age is correct", age)
//         break;
//     case 20:
//         console.log("age is correct", age)
//         break;
//     case 30:
//         console.log("age is correct", age)
//         break;

    // default
    // console.log("are you hacker");

// var dayOfWk = prompt("enter days of Week")
// switch(dayOfWk) {
//  case "Sat" :
//  alert("Whoopee");
//  break;
//  case "Sun" :
//  alert("Whoopee");
//  break;
//  case "Fri" :
//  alert("TGIF!");
//  break;
//  default :
//  alert("Shoot me now!");
//  }

// while loop -->  don't know  about length that 
//for-loop--> when we have to know about length  

// var i = 0;
// while (i<5) {
//     console.log("chal gaya")
// }
// do-while loop
// var i = 0;
// do {
//     console.log("chal gaya")
//     i++
// }
// while(i<5);

// function checkEmail(emailID){
//    var email= document.getElementById('emailID').value
//    if (email=="") {
//     alert("Please enter your email")
//    }
//    console.log("email", emailID)
// }

function checkCampus(){
    var rollNum = document.getElementById("rollNumber").value
    var campus;


    switch (rollNum) {
        case "10":
            campus = "Zaitoon Ahsraf campus"
            break;
            case "20":
            campus = "Gulshan Iqbal campus"
            break;
            case "100":
            campus = "Bhadurabad campus"
            break;
        default:
            alert("not entrolled")
            break;
    }
    document.getElementById("campus").value = campus;
}


function toggleText() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerText = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerText = "Read Less";
  }
}

function Increment() {
    let count = document.getElementById("count").innerText;
    count = innerTextcount ++;
    document.getElementById("count").innerText = count;

    console.log("count==>", count)
}

function Decrement() {
    let count = document.getElementById("count").innerText;
    count = parseInt(count) - 2;
    document.getElementById("count").innerText = count;
}

function Reset() {
    document.getElementById("count").innerText = 0;

}

function showPassWord() { 
    let passwordField = document.getElementById("password");
    let passFieldType = passwordField.getAttribute("type");
    if(passFieldType === "password") {
        passwordField.setAttribute("type", "text");
    } else {
        passwordField.setAttribute("type", "password");
    }
} 
/* create same counter with switch statement*/
// prime number check function
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;

}
// function checkNumber() {  
//     let numberInput = document.querySelector("input[type='number']").value;
//     numberInput = parseInt(numberInput);
//     if (isPrime(numberInput)) {
//         alert(numberInput + " is a prime number.");
//     } else {
//         alert(numberInput + " is not a prime number.");
//     } }

    function checkNumber(){
var number = document.getElementById("number").value;
var message =document.getElementById("para");
console.log("number==>",number);
for (let i=2;  i<number; i++){
  if(number%i ==0){
    message.innerText= number + " is not a prime number" + number;
    return;
  }
}
message.innerText= number + " is a prime number" + number;
    }
