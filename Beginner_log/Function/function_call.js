// ===== 함수 형태 =====
function sumValues(value1, value2) {
  return value1 + value2;
}
var result = sumValues(1, 2);
console.log(result);
// 3

// ===== return =====
function getPoint() {
  return 10 + 30;
}
var result = getPoint();
console.log(result);
// 40

function getPoint() {}
var result = getPoint();
console.log(typeof result);
// undefined
/**
 * 함수에서 어떠한 return 값도 없으면, 최소 undefined 를 반환
 */
