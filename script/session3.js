// let yourName= prompt("Please enter your name")

//if(confirm("Are you "+ yourName+"?")){
    //console.log("Hello "+ yourName);
//}else{
    //console.log("Then what is your name?");
//}

function getDriverLicense(){
    let userAge= prompt("Please enter your age");
    
    if(userAge>=18){
        document.write("Congratulations! You can get your driving license.");
    } else {
        document.write("Sorry, you are too young to get a driving license.");
    }
}

function guessNumber(){
    let userNumber= prompt("Choose a random number between 1 and 10");
        console.log(userNumber);
    let randomNumber= Math.floor(Math.random()* 10)+1;
        console.log(randomNumber);

    if(userNumber == randomNumber){
        document.getElementById("results").innerHTML="Congratulations! You guessed the number.";
    } else {
        document.getElementById("results").innerHTML="Sorry, that's not correct. The number was " + randomNumber;
    }
}

//DB simulation
let username="alex.hazen@gmail.com";
let password="test1234";

function login(){
    let usernameInput= prompt("Enter your username");
    let passwordInput= prompt("Enter your password");
    if (usernameInput== username && passwordInput==password){
        document.getElementById("msg").innerHTML="Welcome to the system";
    } else {
        document.getElementById("msg").innerHTML="Invalid credentials";
    }
}
