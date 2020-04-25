document.write(typeof "Name");

document.write(typeof 10);

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN('Daisy');
    document.getElementById("Test").innerHTML = isNaN('999');
}

document.write(3E420);

document.write(-3E420);

document.write(70>45);

document.write(70<45);

console.log(4+4);

document.write("6" + 7);

document.write(10+5==15);
document.write(10+15==14);

a=10;
b=10;
c="ten";
d=8;

document.write(a===b);
document.write(a===c);
document.write(a===d);
document.write(b===c);

document.write(5>3 && 4>2);
document.write(5<3 && 9>2);
document.write(6>9 || 6>2);
document.write(6>9 || 6>8);

function not_Function() {
    document.getElementById("Not").innerHTML = !(10>7);
    document.getElementById("Not").innerHTML = !(10<7);
    
}

