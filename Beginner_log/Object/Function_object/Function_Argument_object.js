// ===== 함수 내 arguments =====
function getTotal(one) {
  console.log(arguments[3]);
  return one + arguments[1] + arguments[2];
}
var result = getTotal(10, 20, 30);
console.log(result);
// undefined
// 60
/**
 * arguments 오브젝트를 통해, 함수 호출시 넘긴 파라미터를, 함수 선언부에서 명시하지 않은 것 외에
 * arguments[] 인 배열형태로, 접근이 가능하다.
 * 만약, 파라미터로 넘긴 것 외에 접근 불가능한 곳에 접근하면, undefined 를 반환
 * arguments 오브젝트 는 함수호출이 종료되면, 자동으로 해제
 */

// ===== apply() 와 arguments 오브젝트 =====
function getTotal(one) {
  return one + arguments[1] + arguments[2];
}
var result = getTotal.apply(this, [10, 20, 30]);
console.log(result);
// 60
