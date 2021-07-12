// ===== 글로벌 변수(또는 전역변수) -> 글로벌 오브젝트 = 변수를 공유 ! =====
value = 100;
function point() {
  value = 300;
  console.log("함수의 value :", value);
}
point();
console.log(value);
// 함수의 value : 300
// 300
/**
 * 생각한 대로 300 잘 나온 것 같은데 ?
 * - 이게 중요한 게 아니라
 * - value 변수는 지금 point 함수 외부에도 선언이 되어있다.
 * - 문제는, 그것이 글로벌변수(전역변수)로 사용하고 있다는 점이다.
 * - var 키워드도 사용하지 않은, 이런 글로벌 오브젝트의 글로벌 변수는
 * - 값을 공유한다.
 * - 고로, point 함수가 끝난 시점에서, 최상단에 value 에 있는 값을 찍어보면 100이 아닌 300으로 변화된 것을 볼수 있다.
 * - point 함수가 호출이 끝나도, 전역변수에 value 값을 유지하고 싶다면 var 키워드라도 사용하자.
 * - 하지만, 이 또한 좋은 방식은 아니다.
 */

// ===== ES6+ 에서는 "use strict"가 디폴트 환경(전체는 아님) =====
("use strict");
value = 100;
function point() {
  value = 300;
  console.log("함수의 value :", value);
}
point();
console.log(value);
// value = 100;
//       ^
// ReferenceError: value is not defined
/**
 * 최상단에 "use strict" 모드를 명시하면, 그 이후로부터 변수들은
 * 최소 var 키워드를 사용하지 않으면, 엔진이 해석하는 시점에서 에러를 발생시킨다.
 */
