let age = 19;
age >= 18 ? console.log("adult") : console.log("not-adult");

let number = +prompt("Enter your number:");
if (number % 5 === 0) {
  console.log(number, "is a multiple of 5");
} else {
  console.log(number, "is not a multiple of 5");
}

let num = +prompt("Enter your obtained marks");
if (num >= 80 && num <= 100) {
  console.log("Your Grade Is A");
} else if (num >= 70 && num <= 79) {
  console.log("Your Grade Is B");
} else {
  console.log("Your Grade Is C or below");
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("num is", i);
  }
}

let gameNum = 25;
let userNum = +prompt("Guess the number");
while (userNum !== gameNum) {
  userNum = +prompt("Your number is not correct, guess again");
}
console.log("Congratulations! You guessed the correct number:", gameNum);

let str1 = "apnacollege";
console.log(str1[3]);

let obj = {
  item: "pen",
  cost: 100,
};
let output = `The cost of ${obj.item} is ${obj.cost} rupees`;
console.log(output);

let name = prompt("Enter your name");
let length = name.length;
let finalname = "@" + name + length;
console.log(finalname);
