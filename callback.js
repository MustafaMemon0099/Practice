//call back 
function greetUser(callback) {
  console.log("User ko greet karna hai...");
  callback();
}

function sayHello() {
  console.log("Hello from callback!");
}

greetUser(sayHello);
//callback 2
function greetUser(callback) {
  console.log("hello");
}

function sayhello() {
  console.log("Mustafa");
}

let helloMustafa = greetUser(sayhello);
console.log(helloMustafa);