console.log("Calculator");
    var num1= Number(prompt("Enter the first number"));
    var num2= Number(prompt("Enter the second number"));
    var operation= prompt(
            `Choose your operation (Write the number only)
            1-Addition
            2-Subtraction
            3-Multiplication
            4-Division`);

            if(operation == 1){
                document.write(`Your answer is: ${num1+num2}`);
            }if(operation == 2){
                document.write(`Your answer is: ${num1-num2}`);
            }if(operation == 3){
                document.write(`Your answer is: ${num1*num2}`);
            }if(operation == 4){
                document.write(`Your answer is: ${num1/num2}`);
            }