
function getGPA(){
    let a=prompt("Enter the students name");
    let b=prompt("Enter the grade");
    let c=prompt("Enter the grade");

    let d= Number(b);
    let e= Number(c);

    let sum=(d+e)/2;
    document.getElementById("grades").innerHTML
    +=`<div>
            <p>${a}</p>
            <p>${sum}</p>
        </div>`;
}

getGPA();

let total=0;
function getInfo(){
    let a=prompt("Enter the product name");
    let b=Number(prompt("Enter the price"));
    let c=Number(prompt("Enter the quantity"));

    let subtotal = b*c;
    total=total+subtotal;

    document.getElementById("total").innerHTML=total.toFixed(2);

    document.getElementById("product").innerHTML+=`
    <li>${a} - ${subtotal.toFixed(5)}</li>
    `;
}

getInfo();
