// loops

for (let i = 1; i<101; i++){
    console.log(i)
}

i = 1
while(i < 51){
    console.log(i)
    i++;

}

for(i = 1; i<100; i++){
    if(i===32){
    continue;
    }
    console.log(i)
}

let userprompt = Number(prompt("Enter the Number"));

for (let i = 1; i <= userprompt; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

for(let i=1 ; i<101; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log(i)
    }
}

for(i=1; i<=20 ; i++){
    if( i%3 === 0) continue;
    console.log(i);
}

let count = 0
for(i=1 ; i<=101 ; i++){
    if (i%2 === 1){
        count++;
        console.log(i);
    }
    if (count === 5)
        break;
}
