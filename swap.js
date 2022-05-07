
// way one
var a = 5;
var b = 10;

var temp = a;
a = b;
b = temp;
console.log("output a: ", a, "output b: ", b);


// way two
var p = 100;
var q = 50;

p = p+q;
q = p-q;
p = p-q;
console.log("output p: ", p, "output q: ", q);

// way three
var x = 1;
var y = 2;

[x, y] = [y, x]
console.log("output x: ", x, "output y: ", y);