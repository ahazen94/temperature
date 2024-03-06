// for loop
// challenge display numbers from 10 to 100

// Exercise: Multiplication Table for 5

// Use a for loop to generate and display the multiplication table for the number 5.
// The table should include values from 1 to 10.

function multiplicationTable(num){
    document.write(`<h2>Multiplication Table for ${num}</h2>`);
    for(let i=1;i<=10;i++){
        document.write(`<p>${i} x ${num} = ${i*num} </p>`);
    }
}

multiplicationTable(1)
multiplicationTable(2)
multiplicationTable(3)

//while

let i=99;
while(i<=0){
    console.log(i);
    i--;
}

//do

let j=0
do{
    console.log(j);
    j++
}while(j<10);