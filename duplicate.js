
var student = [10,20,120,10,10,10,45,112,45]
var unicName = []

for(let i=0; i<student.length; i++){
    var element = student[i]
    var index = unicName.indexOf(element)
    if(index == -1){
        unicName.push(element)
    }
}
console.log(unicName);