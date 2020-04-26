function Count_to_ten() {
    var Digit = "";
    var x = 1;
    while (x < 11)  {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function    myFunction()    {
    var str = "String Method!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Movies = ["Jumanji", "Hobbs & Shaw", "Ready Player One", "Star Wars", "Avatar"];
var Content = "";
var d;
function for_Loop() {
        for (d = 0; d < Movies.length; d++) {
        Content += Movies[d] + "<br>";        
        }
        document.getElementById("List_of_Movies").innerHTML = Content;
 }

 function   array_Function()    {
     var Fruit = [];
     Fruit[0] = "Apple";
     Fruit[1] = "Orange";
     Fruit[2] = "Peach";
     Fruit[3] = "Banana";
     document.getElementById("Array").innerHTML = "This is a " + Fruit[2] + ".";
 }

 function constant_function()   {
    const Shirt = {type:"short-sleeved", color:"blue", attire:"dressy"};
     Shirt.color="red";
     Shirt.price="$20";
     document.getElementById("Constant").innerHTML = "The color of the " +
        Shirt.type + " shirt was " + Shirt.color + ".";
 }

 var x=10;
 document.write(x + "<br>");
 {
    let x=8;
    document.write(x + "<br>");
 }
 document.write(x + "<br>");

 // Not understanding why this function below isn't working.  I copied it 
 // exactly as written from w3schools:

 function myFunction2() {
    document.getElementById("Pi").innerHTML = Math.PI;
 }
 

 let read = {
         title: "Lockdown2020",
         author: "Corona Virus",
         published: "2020",
         description: function()    {
             document.getElementById("Book").innerHTML = "This book titled " + this.title + " was written by " +
             this.author + " in " + this.published;
         }
     }
 

    
 
