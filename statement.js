let age = 19

if ( age > 18 ){
    console.log (" you can vote ")
}

if ( age < 18) {
 console.log(" you cannot vote")   
}

let num = 1000000093839835

if ( num% 2 === 0){
    console.log( num ,"is even")
} else { 
    console.log( num ,"is odd")
}

let mode = "green";
let color;

if ( mode === "dark"){
    color = "dark"
} else if ( mode === "blue"){
    color = "blue"
} else if ( mode === "purple"){
    color = "purple"
} else if ( mode === "pink"){
    color = "pink"
} else{
    color = "white"
}

console.log(color)
let mode2 = prompt("Enter a theme (dark, blue, purple, pink):");
let color2;

if (mode === "dark") {
  color2 = "black";
} else if (mode2 === "purple") {
  color2 = "purple";
} else if (mode2 === "blue") {
  color2 = "blue";
} else if (mode2 === "pink") {
  color2 = "pink";
} else if (mode2 === "white") {
  color2 = "white";
} else {
  color2 = "green";  // default
}

console.log("Color is: ", color2);
