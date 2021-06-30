// ===== unshift() ====
var value = [1, 2];
value.unshift(345, 678);
console.log(value);
// [ 345, 678, 1, 2 ]
/**
 * 파라미터로 넘긴 값(들)을 0번째 인덱스에 삽입 (파괴적 함수)
 */

// ===== push() =====
var value = [1, 2];
value.push(345, 678);
console.log(value);
// [ 1, 2, 345, 678 ]
/**
 * 파라미터로 넘긴 값(들)을 배열에 맨 뒤에 다가 밀어넣음 (파괴적 함수)
 */

// ===== concat() =====
// ===== 배열에 파라미터 값 연결 =====
var value = [1, 2];
var result = value.concat(3, 4);
console.log(`value : ${value}`);
console.log(`result : ${result}`);
// value : 1,2
// result : 1,2,3,4
/**
 * 파라미터로 넘긴 값(들)을 배열 맨 뒤에 연결 (비 파괴적 함수)
 */
