// ==== forEach() =====
// ==== 기본 방법 =====
var list = ["A", "B", "C", "D"];
list.forEach(function (el, index, all) {
  console.log(`${index} : ${el} : 전체리스트 : ${all}`);
});
// 0 : A : 전체리스트 : A,B,C,D
// 1 : B : 전체리스트 : A,B,C,D
// 2 : C : 전체리스트 : A,B,C,D
// 3 : D : 전체리스트 : A,B,C,D
/**
 * el = 배열의 각 엘리먼트(순서대로) 매칭
 * index = 배열의 각 엘리먼트(순서대로)마다 인덱스 매칭
 * all = 배열의 모든 엘리먼트를 의미
 */

// ===== 콜백 함수를 분리 =====
var list = ["A", "B", "C", "D"];
var fn = function (el, index, all) {
  console.log(`${index} : ${el} : 전체리스트 : ${all}`);
};
list.forEach(fn);
// 0 : A : 전체리스트 : A,B,C,D
// 1 : B : 전체리스트 : A,B,C,D
// 2 : C : 전체리스트 : A,B,C,D
// 3 : D : 전체리스트 : A,B,C,D
/**
 * 위에 기본방법과 결과는 동일하다.
 * ★ 하지만, "재사용" 관점에서 앞으로 모든 코드에 있어서 코드중복을 최소화 하기위해, 특정 공통기능을 담당하는 함수는 "분리" 하는 것이 좋다.
 */

// ===== this 로 오브젝트 참조 =====
var list = ["A", "B", "C", "D"];
var fn = function (el, index, all) {
  console.log(`${index} : ${el + this.add} : 전체리스트 : ${all}`);
};
list.forEach(fn, { add: "Z" });
// 0 : AZ : 전체리스트 : A,B,C,D
// 1 : BZ : 전체리스트 : A,B,C,D
// 2 : CZ : 전체리스트 : A,B,C,D
// 3 : DZ : 전체리스트 : A,B,C,D
/**
 * 콜백함수에 오브젝트를 파라미터로 넘겨도 이상없다.
 * 콜백함수 내부에서, this 를 통해 접근 가능하다.
 */
