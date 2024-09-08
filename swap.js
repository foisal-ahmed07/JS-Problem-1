let a = 5;
let b = 8;
const c = a;
console.log(a, b)
a = b;
b = c;
console.log(a, b);

let x = 10;
let y = 20;
console.log(x, y)
[x, y] = [y, x];
console.log(x, y)

const math = Math.pow(2, 3)
console.log(math)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}