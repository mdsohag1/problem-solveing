
function fectorial(num) {
    var fect = 1;
    for (let i = 1; i <= num; i++) {
        fect = fect * i        
    }
    return fect
}
var result = fectorial(5)
console.log(result);