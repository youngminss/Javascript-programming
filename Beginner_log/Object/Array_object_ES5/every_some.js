// ===== Array.every() =====
var value = [20, 10, 30, 40];
var fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
var result = value.every(fn);
console.log(`결과 : ${result}`);
// 20
// 10
// 결과 : false
/**
 * 배열안에 엘리먼트를 하나씩 탐색하면서 반환값이 false 일때까지 반복
 */

// ===== Array.some() =====
var value = [10, 20, 30, 40];
var fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
var result = value.some(fn);
console.log(`결과 : ${result}`);
// 10
// 20
// 결과 : true
/**
 * 배열 안에 엘리먼트를 하나씩 탐색하면서 반환값이 true 일때까지 반복
 */
