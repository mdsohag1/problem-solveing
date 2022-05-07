
function animalCount(depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50
    } 
    else if(depth <= 20){
        var first = 10 * 50
        var secoundDepth = depth - 10
        var second = secoundDepth * 100
        animal = first + second
    }
    else{
        var first = 10 * 50
        var second = 10 * 100
        var thirdDepth = depth - 20
        var third = thirdDepth * 300
        animal = first + second + third
    }
    return animal;
}

var result = animalCount(30)
console.log(result);
 
var result = animalCount(12)
console.log(result);
 
var result = animalCount(18)
console.log(result);
 