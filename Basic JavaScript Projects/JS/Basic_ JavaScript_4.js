function my_Dictionary()    {
    var Customer = {
        Name: "John",
        City: "Portland",
        Product: "DVD",
        Title: "Jumanji",
        Rental_Period: "2 Days"
    };
    delete Customer.Title;
    document.getElementById("Dictionary").innerHTML = Customer.Title;
}