// ===== 일반 함수 =====
// const add = function (one, two) {
//   return one + two;
// };
// console.log(add(1, 2));
// 3

// ===== 화살표 함수 =====
// const total = (one, two) => {
//   return one + two;
// };
// console.log(total(1, 2));
// 3

// ===== 함수 블록{} 과 return 문 생략 가능 =====
const total = (one, two) => one + two;
console.log(total(1, 2));
// 3

const none = (one) => {};
console.log(none());
// undefined
/**
 * 함수블록에 return 을 작성하지 않은 것과 같음
 * 디폴트로 undefined 를 반환
 */

// ===== { key : value } 반환 =====
const point = (param) => ({ book: param });
const result = point("책");
for (const key in result) {
  console.log(`${key} : ${result[key]}`);
}
// book : 책
/**
 * 화살표함수로 오브젝트형태를 반환시에는, {} 바깥에 ()를 감싸야한다.
 * ()를 작성하지 않으면, undefined 를 반환
 */

// ===== 파라미터가 하나일 때 =====
const get = (param) => param + 20;
console.log(get(10));
// 30
/**
 * 파라미터 하나일 경우, 소괄호 생략가능
 */

// ===== 파라미터가 없을 때 =====
const getNone = () => 10 + 20;
console.log(get());
// 30
/**
 * 파라미터가 없다면, 소괄호만 작성 가능
 */
