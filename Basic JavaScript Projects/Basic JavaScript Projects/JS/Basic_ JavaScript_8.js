function Sentence() {
    var sen1 = "I am ";
    var sen2 = "putting this ";
    var sen3 = "sentence ";
    var sen4 = "together.";
    var full_sen = sen1.concat(sen2, sen3, sen4);
    document.getElementById("Concatenate").innerHTML = full_sen;
}

function Find() {
    var str = "The mystery man is John";
    var pos = str.lastIndexOf("John");  
    document.getElementById("Name").innerHTML = pos;
}

function myFunction()   {
    var str = "This will change to Upper Case";
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

function mySearch() {
    var str = "We are in Lockdown2020";
    var a = str.search("Lockdown2020");
    document.getElementById("Find_it").innerHTML = a;
}

function string_Method()    {
    var x=989;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var y=56324.59864515;
    document.getElementById("Precision").innerHTML = y.toPrecision(8);
}

function best_for_money()   {
    var z = 56.2354;
    document.getElementById("Money").innerHTML = z.toFixed(2);
}

function value_method() {
    var b =  959;
    document.getElementById("Value").innerHTML = b.valueOf();
}

