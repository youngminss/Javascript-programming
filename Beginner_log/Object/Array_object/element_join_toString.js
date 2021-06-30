// ===== join() =====
// ===== 분리자값이 존재하는 경우 =====
var value = [1, 2, 3];
var result = value.join("##");
console.log(result);
console.log(typeof result);
// 1##2##3
// string

// ===== 분리자를 작성하지 않은 경우 =====
var value = [1, 2, 3];
var result = value.join();
console.log(result);
console.log(typeof result);
// 1,2,3
// string

// ===== 분리자에 빈 문자열을 넣은 경우 =====
var value = [1, 2, 3];
var result = value.join("");
console.log(result);
console.log(typeof result);
// 123
// string
/**
 * 이 경우는, 생각보다 많이 쓰임
 * 데이터로 HTML 마크업을 만들어서 한 번에 표시 => 브라우저에서는 1번의 렌더링 효과
 */

// ===== toString() =====
var result = ["A", "B", "C"].toString();
console.log(result);
console.log(typeof result);
// A,B,C
// string
/**
 * Array.toString() => Array 엘리먼트들을 ,(콤마)를 기준으로 연결해서 반환
 */
