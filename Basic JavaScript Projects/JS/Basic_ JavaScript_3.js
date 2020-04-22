function myFunction(p1, p2)    {
    document.getElementById("Math").innerHTML = (p1*p2);
}

function addition() {
    var addition = 50 + 24;
    document.getElementById("Math").innerHTML = "50 + 24 = " + addition;
}
function subtract() {
    var subtract = 10-3;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtract;
}

function division() {
    var division = 24/6;
    document.getElementById("Math").innerHTML = "24 / 6 = " + division;
}

function multiply() {
    var multiply = 10 * 3;
    document.getElementById("Math").innerHTML = "10 x 3 = " + multiply;
}

function negation() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var y=5;
y++;
document.write(y);

var z=12;
z--;
document.write(z);


window.alert(Math.random() * 100);








