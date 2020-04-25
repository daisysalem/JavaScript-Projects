function Ride_Function()    {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height<48) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";    
} 

function Vote_Function()    {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age<18) ? "You are too young to" : "You can";
    document.getElementById("Vote").innerHTML = Can_Vote + " Vote";

}

function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;    
}

var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "Black and White");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in" + Erik.Vehicle_Year;
}

function Menu(Entree, Side, Dessert, Drink) {
    this.Menu_Entree = Entree;
    this.Menu_Side = Side;
    this.Menu_Dessert = Dessert;
    this.Menu_Drink = Drink;    
}

var Jill = new Menu("Chicken", "Salad", "No", "Diet Coke");
var Jack = new Menu("Burger", "Fries", "Cheesecake", "Beer");
var Mike = new Menu("Lasagna", "Soup", "Tiramisu", "Wine");
function myFunction2()  {
    document.getElementById("New_and_This").innerHTML = 
    "Jack will have a " + Jack.Menu_Entree + " with " + Jack.Menu_Side + 
    " and will drink " + Jack.Menu_Drink;
}

function Nested()  {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count()    {
        var Age = 10;
        function Add_one()  {Age += 1;}
        Add_one();
        return Age;
    }
}
