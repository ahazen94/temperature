function convert(){
    let temperature=Number(prompt("Enter your temperature in Celsius"));
    document.getElementById("results").innerHTML=`The conversion of Celsius ${temperature} to Farenheit is ${farenheit=((temperature*9/5)+32)}`;
}