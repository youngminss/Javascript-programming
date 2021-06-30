// ===== Array.filter() =====
var value = [10, 20, 30, 40, 50];
var fn = function (el, index, all) {
  return el > 15;
};
var result = value.filter(fn);
console.log(result);
// [ 20, 30, 40, 50 ]
/**
 * filter 함수에서 반환 값이 true 일때의 element 들이 담긴 "배열"을 반환한다.
 */

// ===== Array.map() =====
var value = [10, 20, 30, 40, 50];
var fn = function (el, index, all) {
  return el + this.add;
};
var result = value.map(fn, { add: 100 });
console.log(result);
// [ 110, 120, 130, 140, 150 ]
/**
 * this 로 참조할 오브젝트를 넘겨서, 기존에 배열의 엘리먼트 + 100 한, 새로운 배열 결과를 반환
 */
