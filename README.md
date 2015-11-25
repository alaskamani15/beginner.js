`beginner.js`
===================

Description:
This JavaScript library will help beginners create their first program.

----------
Installed Functions:
-------------
<pre>
stop("Now!");
</pre>
The stop() function creates an alert box with the text given.


<pre>
Library.greet();
</pre>
Useful for debugging to make sure the library is active. It should print out: `Hello from the  library.`


<pre>
kill();
</pre>
A random function that will kill the browser. Just for fun. The JavaScript equivalent is:
(note: the `kill();` function will ask for a confirmation. For no confirmation, use the `evil();` function)
<pre>
var questki = confirm("This will kill the browser! Click OK to continue.");
            if (questki == true){
                var i = 0;
                while (i < Infinity){
                    console.log("Please wait!");
                    //i++
                }
            } else {
                console.log("Cancelled Kill");
            }
    }
</pre>


Thank you.
----------

Thank you all for all your support. Since beginner.js is still really new, installing it own your website will mean you have to agree to the following things: 
- `console.log` and `console.warn` messages will be used
- There may be bugs
- It may crash at anytime
- Your website may not function properly
- Any Chrome/Safari/Firefox extensions may not function properly




