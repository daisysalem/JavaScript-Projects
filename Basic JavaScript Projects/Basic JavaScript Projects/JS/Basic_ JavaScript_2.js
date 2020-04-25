var a = "This is red.<br>";
var a = a.fontcolor("red");

var b = "This is blue.<br>";
var b = b.fontcolor("blue");

document.write (a);
document.write (b);

function myFunction2()   {
    var sentence = "You just clicked me!";
    sentence += " Wasn't that cool!?";
    document.getElementById("Concatenate").innerHTML = sentence;
}

document.write (sentence);

function myFunction3(p1, p2)    {
    document.getElementById("total").innerHTML = (p1*p2);
}

 





