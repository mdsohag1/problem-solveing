// ===========Feet to mile

// function feetToMile(feet){
//     var mile = feet/5280;
//     return mile;
// }
// var result = feetToMile(10560)
// console.log(result);





//=========chair, table, bed

// function woodCalculator(chair, table, bed){
//     let chairKat = chair * 1
//     let tableKat = table * 3
//     let bedKat = bed * 5
    
//     var totalKat = chairKat + tableKat + bedKat

//     return totalKat;
// }

// var result = woodCalculator(10, 5, 2)
// console.log(result);
// var result2 = woodCalculator(15, 2, 5)
// console.log(result2);
// var result3 = woodCalculator(8, 14, 20)
// console.log(result3);





//==============  30 tola building ar map

// function brickCalculator(tola){

//     var oneTolaEat = 1000 * 15
//     var tenTolaUpEat = 1000 * 12
//     var upTwintyTotalEat = 1000 * 10
//     var tenTolaTotalEat = 1000 * 15 * 10
//     var downTwintyTolaTotalEat = 1000 * 12 * 10


//     var eat = 0;

//     if(tola <= 10){
//         eat = oneTolaEat * tola
//     }
//     else if(tola <= 20 && tola >= 10){
//         const upten = tola - 10
//         const upTenTotal = upten * tenTolaUpEat
//         eat = upTenTotal + tenTolaTotalEat
//     }
//     else{
//         const uptwenty = tola - 20
//         var uptwentyTotal = uptwenty *  upTwintyTotalEat
//         eat = uptwentyTotal + tenTolaTotalEat + downTwintyTolaTotalEat
//     }
//     return eat;
// }

// var result = brickCalculator(10)
// console.log(result);

// var result1 = brickCalculator(20)
// console.log(result1);

// var result2 = brickCalculator(30)
// console.log(result2);

// var result3 = brickCalculator(40)
// console.log(result3);





//==============  friends arry theke sobtheke cuto nam ber kora

function tinyFriends (name){
    var smallName = name[0]
    var smallAll = []
    for(i=0; i<name.length; i++){
        var element = name[i]
        if(element.length < smallName.length){
            smallName = element
            smallAll.push(smallName)
        }
    }
    return smallAll;
}
var friendsName = ["sohag", "rahad", "ali", "akbor khan", "mui"]
var mainFriends = tinyFriends(friendsName)
console.log(mainFriends);

