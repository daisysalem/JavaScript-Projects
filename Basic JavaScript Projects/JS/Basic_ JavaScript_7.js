var x=9;
function Add()  {
    document.write(10+x+"<br>");
}
function Add2() {
    document.write(x+200+"<br>");
}
Add();
Add2();

function Add3() {
    var y=9;
    document.write(13+y+"<br>");    
}
function Add4() {
    document.write(y+100);    
}
Add3();
Add4();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Have a great day!";
    
    }
}

function Birthdate() {
    if (new Date().getMonth = 3)  {
        document.getElementById("Birthday").innerHTML = "Happy Birthday!";
    }
}

function Student_status()   {
    Student = document.getElementById("Student").value;
    if (Student === "yes")    {
        Discount = "You're eligible for a student discount";
     }
     else   {
        Discount = "You're not eligible for a student discount";
     }
     document.getElementById("Student2").innerHTML = Discount;
}

function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)    {
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18)  {
        Reply = "It is the afternoon.";
    }
    else if (Time > 18) {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
  
}

