// ===== sort() =====
var value = [4, 3, 2, 1];
console.log(value.sort());
console.log(value);
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4 ]
/**
 * Array.sort() 는 원본도 변환하는 "파괴적 함수"
 */

// ===== 유니코드 순서 =====
var value = ["A1", "A01", "B2", "B02"];
console.log(value.sort());
console.log(value);
// [ 'A01', 'A1', 'B02', 'B2' ]
// [ 'A01', 'A1', 'B02', 'B2' ]
/**
 * 문자열 하나씩, 유니코드 순서상으로 정렬
 */

// ===== undefined는 우선순위가 가장 낮다. =====
var value = [, , 1, 2];
console.log(value.sort());
// [ 1, 2, <2 empty items> ]
/**
 * 원 배열 순서 = [ undefined, undefined, 1, 2 ]
 * 정렬 후 순서 = [ 1, 2, undefined, undefined ]
 */

// ===== JS sort() 기본 = Unicode 순 정려 =====
var value = [101, 26, 7, 1234];
console.log(value.sort());
// [ 101, 1234, 26, 7 ]
/**
 * 이상적이라면, [7, 26, 101, 1234] 순으로 정렬되어야 한다.
 * JS에서는 Unicode 상으로 정렬하기때문에, 앞에서부터 Unicode 가 먼저인 수 순으로 정렬
 * 따라서, [101, 1234, 26, 7] 순으로 정렬된다.
 * 이건 우리가 바라는 방향이 아니다.
 */

// ===== sort() 알고리즘 (오름차순) =====
var value = [101, 26, 7, 1234];
value.sort(function (one, two) {
  return one - two;
});
console.log(value);
// [ 7, 26, 101, 1234 ]
/**
 * 이상적인 "오름차순" 정렬이 되었다.
 * [원리]
 * - JS 에서 Array.sort() 메소드에, 파라미터로 정렬 기준이 될 "콜백함수"를 넘긴다.
 * - 콜백함수의 결과값이 "양수냐", "음수냐"에 따라 정렬 기준이 달라진다.
 * - 현재 콜백함수는, 순서대로 (앞 - 뒤) 값을 판단해서, 반환 값이 "0보다 크면" 위치를 교환, "0이나, 0보다 작으면" 유지
 */

// ===== sort() 알고리즘 (내림차순) =====
var value = [10, 20, 30, 40, 50];
value.sort(function (one, two) {
  return two - one;
});
console.log(value);
// [ 50, 40, 30, 20, 10 ]

// ===== Array.reverse() =====
var value = [1, 3, 7, 5];
console.log(value.reverse());
console.log(value);
// [ 5, 7, 3, 1 ]
// [ 5, 7, 3, 1 ]
/**
 * Array.reverse() 는, 원본 배열을 단순 뒤집기, "파괴적 함수"
 */
