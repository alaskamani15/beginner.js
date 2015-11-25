//O. M. J. This actually works. YAY!!!

console.log("Running!");

var Library = {
    name: "Timmy", //Library has been called Timmy
    greet: function(){
        alert("Hello from the " + Library.name + " library.");
        console.log("User executed Library.greet()!" + "Hi " + Library.name);
    }
    
    kill: function(){
        var questki = confirm("This will kill the browser! Click OK to continue.");
            if (questki == true){
                var i = 0;
                while (i<Infinity){
                    console.log("Please wait!");
                    //i++
                }
            } else {
                console.log("Cancelled Kill");
            }
    }
    /*
    This library is what is known as an object literal. To invoke the greet function, we would write:
    Library.greet();
    */

}

function stop(text){
        var alerttext = text;
        alert(alerttext);
        console.log("You just alerted" + alerttext);
    }


console.log("All code completed with no errors. \n\n\n Success!")
