// Practice Questions

// Q1: Array operations
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(companies);

// Q2: Function declaration
function Name() {
  console.log("Hello World");
}
Name();

// Q3: Arrow function
const mul = (a, b, c, d) => {
  console.log(a * b + c * d);
};
mul(3, 5, 7, 2);

// Q4: Count vowels in a string
function countVowels(str) {
  let count = 0;
  for (let val of str.toLowerCase()) {
    if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
      count++;
    }
  }
  return count;
}
console.log(countVowels("ApnaCollege"));

// Q5: DOM manipulation
let h2 = document.querySelector("h2");
if (h2) {
  h2.innerText = h2.innerText + " From Apna College";
}
