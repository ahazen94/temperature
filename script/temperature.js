function convertTemperatureRange(){
    let startValue=Number(prompt("Enter your starting temperature (Either Farenheit or Celsius"));
    let endValue=Number(prompt("Enter an ending value"));
    let scale= prompt("Enter a scale: 1.F or 2.C");

    for(let i=startValue; i<=endValue; i++)
    if(scale==1){
        let farenheit = i;
        celsius = (farenheit -32)*5/9;
        document.getElementById("results").innerHTML+=`<p>The conversion of Fahrenheit ${farenheit} to Celsius is ${celsius}</p>`;
    }for(let i=startValue;i<=endValue;i++)if(scale==2){
        let celsius=i;
        fahrenheit=(celsius*9/5)+32;
        document.getElementById("results").innerHTML+=`<p>The conversion of Celsius ${celsius} to Fahrenheit is ${fahrenheit}</p>`;
    }
}