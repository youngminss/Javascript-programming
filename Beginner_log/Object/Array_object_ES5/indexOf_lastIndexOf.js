// ===== indexOf() =====
var value = [1, 2, 4, 2, 4];
console.log(value.indexOf(4));
// 2
/**
 * 배열 내 4가 처음 등장하는 인덱스 => 2 반환
 */

// ===== 데이터 타입까지 체크 =====
var value = [1, 2, 5, 2, 5, "5", "2"];
console.log(value.indexOf("5"));
console.log(value.indexOf(10000));
// 5
// -1
/**
 * indexOf() 메소드는 "데이터 타입","값" 모두 비교한다.
 * "5" 는 string 타입까지 고려했을 때 매칭되는 인덱스 => 5 반환
 * 존재하지 않을 경우 => -1 반환
 */

// ===== 두 번째 파라미터 작성 시 =====
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5, 3));
// 4
/**
 * Array.indexOf(타겟값, 시작인덱스위치)
 * 시작 인덱스부터 탐색을 시작하라는 의미
 */

// String 과 Array 의 indexOf() 차이 =====
console.log("ABCDE".indexOf("C", -2));
console.log(["A", "B", "C", "D", "C"].indexOf("C", -2));
// 2
// 4
/**
 * String 의 indexOf(타겟값, 시작인덱스) 경우, 시작인덱스로 "음수"를 주어도, 0번째 인덱스부터 탐색
 * Array 의 indexOf(타겟값, 시작인덱스) 경우, -2 + Array.length 만큼에서부터, 탐색
 */

// ===== lastIndexOf() =====
var value = [1, 2, 5, 2, 5];
console.log(value.lastIndexOf(5));
// 4
/**
 * Array.indexOf() 와의 차이점은, 단지 배열의 맨뒤에서부터 탐색
 */
