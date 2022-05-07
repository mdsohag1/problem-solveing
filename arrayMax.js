
var marks = [12,45,78,45,12,4562,123,0114,12,41]
var max = marks[0]

for(i=0; i<marks.length; i++){
    var element = marks[i]
    if(element > max){
        max = element
    }
}
console.log(max);