
function reverseString (str){
    reverse = ""
    for(i=0; i<str.length; i++){
        var char = str[i]
        reverse = char + reverse
    }
    return reverse;
}

var statement = "hello vai brother"
var alien = reverseString(statement)
console.log(alien);

