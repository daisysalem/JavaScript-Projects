function    Vacation_Function() {
    var Vacation_Output;
    var Vacations = document.getElementById("Vacation_input").value;
    var Vacation_String = " would be a fun vacation!";
    switch(Vacations)   {
        case "Cruise":
            Vacation_Output = "A Cruise" + Vacation_String;
        break;
        case "Hawaii":
            Vacation_Output = "Hawaii" + Vacation_String;
        break;
        case "Cabin at Yellowstone":
            Vacation_Output = "A Cabin at Yellowstone" + Vacation_String;
        break;
        case "Europe":
            Vacation_Output = "Europe" + Vacation_String;
        break;
        case "Asia":    
            Vacation_Output = "Asia" + Vacation_String;
        break;
        case "Disney & Universal Studios":
            Vacation_Output = "Disney & Universal Studios" + Vacation_String;
        break;
        default:
        Vacation_Output = "Please enter Vacation choice as written on list";
    }
    document.getElementById("Output").innerHTML = Vacation_Output;

}