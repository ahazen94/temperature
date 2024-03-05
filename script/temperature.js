function convertTemperature(){
    let temperature=Number(prompt("Enter your temperature (Either Farenheit or Celsius"));
    let operation= prompt(
        `Choose Either Option
        1-Farenheit
        2-Celsius`
    )
    if(operation== 1){
        document.getElementById("results").innerHTML=`The conversion of Farenheit ${temperature} to Celsius is ${celsius=(temperature*9/5)}`;
    }if(operation== 2){
        document.getElementById("results").innerHTML=`The conversion of Celsius ${temperature} to Farenheit is ${farenheit=((temperature*9/5)+32)}`;
    }
}