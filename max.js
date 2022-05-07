var business = 1120;
var minister = 21000;
var sochib = 320000;

// ==================  way 1  ===================

var max = Math.max(business, minister, sochib)
console.log(max);


// ==================  way 2  ===================

if(business > minister && business > sochib){
    console.log("business is bigger")
}
if(minister > business && minister > sochib){
    console.log("minister is bigger")
}
if(sochib > business && sochib > minister){
    console.log("sochib is bigger")
}


// ==================  way 3  ===================

if(business > minister){
    if(business > sochib){
        console.log("biness is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}else{
    if(minister > sochib){
        console.log("minister is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}