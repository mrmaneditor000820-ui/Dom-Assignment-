//   let count = 0;
// function increase() {
//   count++;
//   document.getElementById("count").innerText = count;
// }
// function decrease() {
//   count--;
//   document.getElementById("count").innerText = count;
// }
// function reset() {
//   count = 0;
//   document.getElementById("count").innerText = count;
// }

var count = 0;
function increase(action) {
  switch (action) {
    case 'increase':
      count++;
      break;
    case 'decrease':
      count--;
      break;
    case 'reset':
      count = 0;
      break;
  }
  document.getElementById('count').innerText = count;

}

function showPassWord() {
  var passwordField = document.getElementById("password");
  var showPasswordIcon = document.getElementById("showPassword");
  if (passwordField.type === "password") {
    passwordField.type = "text";

  }
  else {
    passwordField.type = "password";
  }
}

function checkNumber() {
  var number = document.getElementById("number").value;
  var message = document.getElementById("para");
  console.log("number==>", number);
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      message.innerText = number + " is not a prime number" + number;
      return;
    }
  }
  message.innerText = number + " is a prime number" + number;

}

function checkOddEven() {
  var number = document.getElementById("oddEven").value;
  var message = document.getElementById("paragraph");
  console.log("number==>", number);
  for (let i = 2; i < number; i++) {

    if (number % 2 == 0) {
      message.innerText = number + " is Even number" + number;
      return;
    }
  }
  message.innerText = number + " is Odd number" + number;

}






// function checkNumber() {

// var number = document.getElementById("number").value;
// var message =document.getElementById("para");
//     // odd even check
//     if (number % 2 === 0) {
//         console.log(number + " is Even");
//     } else {
//         console.log(number + " is Odd");
//     }

//     // prime check
//     let isPrime = true;

//     if (number < 2) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(number + " is Prime Number");
//     } else {
//         console.log(number + " is Not Prime Number");
//     }
// }

// example
