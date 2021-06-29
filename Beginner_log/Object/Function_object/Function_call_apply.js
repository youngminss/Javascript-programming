// ===== call() =====
function getTotal(one, two) {
  return one + two;
}
var result = getTotal.call(this, 10, 20);
console.log(result);
// 30
/**
 * 여기서, 첫번째 파라미터 "this"는 파라미터로 전달되지 않는다.
 */

// ===== 첫번째 파라미터 =====
var value = { one: 10, two: 20 };
function getTotal() {
  return this.one + this.two;
}
var result = getTotal.call(value);
console.log(result);
// 30
/**
 * 여기서는 value 오브젝트를 파라미터로 넘김
 * getTotal 함수에서 this가 value 오브젝트를 "참조"한다.
 * 그래서 this.one 형식으로 내부 프로퍼티 값을 구할 수 있다.
 */

// ===== apply() =====
function getTotal(one, two) {
  return one + two;
}
var result = getTotal.apply(this, [10, 20]);
console.log(result);
// 30
/**
 * Function.apply() 는 파라미터 수를 유동적으로 배열을 통해 사용가능
 */
