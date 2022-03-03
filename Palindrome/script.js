//Check button

var letters = [];
//var word = window.prompt("Type a word")
var rword = ""; // empty string for a reverse word


document.getElementById("myButton").onclick = function() {
    var word = document.getElementById("word").value;

    // put letters of the word into stack
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]); //push = on top of the stack
    }

    // pop off the stack in reverse order
    for (var i = 0; i < word.length; i++) {
        rword += letters.pop(word[i]); // pop = popping off the first letter
    }
    if (rword === word) {
        //console.log(word + " is a palindrome.");
        let message = document.querySelector("#message");
        message.innerHTML = word + " is a palindrome."
    }
    else {
        message.innerHTML = word + " is NOT a palindrome."
    }
}

// Refresh Button

function refresh(){
    location.reload();
}

