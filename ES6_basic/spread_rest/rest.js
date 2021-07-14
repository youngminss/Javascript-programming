// ===== rest 파라미터 기본 =====
// function point(...param) {
//   console.log(param);
//   console.log(Array.isArray(param));
// }
// const values = [10, 20, 30];
// point(...values);
// [ 10, 20, 30 ]
// true

// ===== rest 파라미터 혼합 사용 =====
function point(ten, ...rest) {
  console.log(ten);
  console.log(rest);
}
const values = [10, 20, 30];
point(...values);
// 10
// [ 20, 30 ]
/**
 * point 함수를 호출할 때 spread 로 분리해서 전개한 Array 이터레이터를 파라미터로 넘김
 * point 함수 파라미터에서 정의된 순서대로, ten 에 첫번째 원소를 적용하고
 * 나머지 20,30 에 대해서는 rest 라는 이름으로 매핑되어 결합되어 사용
 */

// ===== Array-like =====
const values = { 0: "가", 1: "나", 2: "다", length: 3 };
for (let k = 0; k < values.length; k++) {
  console.log(values[k]);
}
// 가
// 나
// 다
/**
 * 원래 Object 는 이터러블이 아님
 * 근데, Array-like 라고, 이터러블 형태의 배열처럼 생긴 구조를 만들 수 있다.
 * 이는, 각 프로퍼티에 인덱스가 존재해야하고, 인덱스는 0 부터 순차적이어야만 한다.
 * 마지막 프로퍼티에는 프로퍼티의 갯수인 length 를 정의해야한다.
 */
