// ||(or) 연산
var value,
  zero = 0,
  two = 2;

console.log(value || zero || two);
// 2
console.log(zero || value);
// undefined
var one = 1;
console.log(one === 1 || two === 2);
// true

// &&(and) 연산
var one = 1,
  two = 2;
console.log(one && two);
// 2
var one = 1,
  zero = 0;
console.log(one && zero && nine);
// 0 (zero의 0 이다.)
