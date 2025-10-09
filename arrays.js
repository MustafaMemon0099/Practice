
let marks = [57, 9, 30, 83];
console.log("Marks:", marks);
console.log("Length:", marks.length);

marks[2] = 93;
console.log("Updated index 2:", marks[2]);

let marks2 = [9, 56, 94, 61, 85, 10];
console.log("\nLoop using for:");
for (let i = 0; i < marks2.length; i++) {
  console.log(marks2[i]);
}

console.log("\nLoop using for...of:");
for (let num of marks2) {
  console.log(num);
}

let marks3 = [43, 45, 23, 65, 234, 29, 39, 94, 64];
let sum = 0;
for (let val of marks3) {
  sum += val;
}
let avg = sum / marks3.length;
console.log("\nAverage marks of class is:", avg);

let fruits = ["apple", "banana", "grapes"];
console.log("\nFruits:", fruits);

let marks4 = [0, 9, 8, 3, 4, 6, 0, 7];
marks4.splice(1, 3, 101, 102);
console.log("\nUpdated marks using splice:", marks4);

// array again

let marks = [0,37,85,92,84,73,92]
console.log(marks.slice(1,4))

let h1 = document.querySelector("h1");
h1.innerText = "Facts of Cats"

let p = document.querySelector("p"); // only first p

p.addEventListener("click", function() {
    p.style.color = "red";
});


let sel = document.querySelector("select");
let h1 = document.querySelector("#h1");

sel.addEventListener("change" , function(det){
    h1.textContent = `${det.target.value} Selected`
})

let p2 = document.querySelector("#para");
let body = document.body;

body.addEventListener("keydown" , function(det){
    p2.textContent = (det.key)
    
})

let div = document.querySelector("#colorchange")
addEventListener("mouseover" , function(){
    div.style.backgroundColor = "green";
})
addEventListener("mouseout" , function(){
    div.style.backgroundColor = "red";
})

settimeout
