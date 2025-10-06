//ASYNC PROGRAMMING FUNCTION

setTimeout(()=>{
console.log ("hello");
}, 5000)
//functions at page
function myintro(){
  document.writeln("my name is Mustafa");
  document.writeln("<br>")
  document.writeln("i am 15 yeras old");
  document.writeln("<br>")
  document.writeln("i live in karachi");
   document.writeln("<br>")
}
myintro()
//function with arrguments
function fullnamefunc(fname, lname){
  document.writeln("Hello" + "Mustafa", "Memon"  )
    document.writeln("<br>")
    document.writeln("Hello" + "Ali", "Memon"  )
      document.writeln("<br>")
    document.writeln("Hello" + "Waqas", "Memon"  )
}
fullnamefunc();
Promises
let promise = new Promise((resolve, reject) => {
  resolve("Promise completed successfully");
});

function asyncfunc (){
return new Promise ((resolve , reject ) => {
  setTimeout (() => {
    console.log ( " done" );
    resolve ("success")
   },2000 );
});
}

let p1 = asyncfunc()
p1.then ((res) =>{
  console.log(res);
}
)