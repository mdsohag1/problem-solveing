
function allSum (num){
    var sum = 0;
    for(i=0; i<num.length; i++){
        var element = num[i]
        sum =  sum + element
    }
    return sum;
}
var marks = [142,12,12,12,12,10]
var result = allSum(marks)
var result2 = allSum([10,10,10,10,10,10])
console.log(result);
console.log(result2);


