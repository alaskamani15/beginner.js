//O. M. J. This actually works. YAY!!!

console.log("Running!");

var Library = {
    name: "John", //Library has been called Timmy
    greet: function(){
        alert("Hello from the " + Library.name + " library.");
        console.log("User executed Library.greet()!" + "Hi " + name);
    }
    stop: function (text){
        var alerttext = text;
        alert(alerttext);
        console.log("You just alerted" + alerttext);
    }
    /*
    This library is what is known as an object literal. To invoke the greet function, we would write:
    Library.greet();
    */

}

console.log("All code completed with no errors. \n\n\n Success!")
