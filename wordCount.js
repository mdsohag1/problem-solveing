
var speech = "i am a       student of class twleve"

var count = 0;
for(i=0; i<speech.length; i++){
    var kerekter = speech[i]
    if(kerekter == " " && speech[i-1] != " "){
        count++
    }
}
count++
console.log(count);