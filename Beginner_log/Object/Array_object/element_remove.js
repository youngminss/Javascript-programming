// ===== shift() =====
// ===== 첫 번째 엘리먼트 삭제 =====
var value = [1, 2, 3];
console.log(value.shift());
console.log(value);
console.log(value.length);
// 1
// [ 2, 3 ]
// 2
/**
 * Array.shift() 함수는 배열에서 완전히 삭제
 * 실행 후, 배열의 길이도 -1 변화
 */

// ===== 빈 배열 삭제할 경우 =====
var result = [].shift();
console.log(result);
// undefined

// ===== pop() =====
// ===== 마지막 엘리먼트 삭제 =====
var value = [1, 2, 33333];
console.log(value.pop());
console.log(value);
console.log(value.length);
// 33333
// [ 1, 2 ]
// 2

// ===== 빈 배열 pop() 경우 =====
var result = [].pop();
console.log(result);
// undefined

// ===== splice() =====
// ===== 파라미터 2개(시작,끝) 작성 =====
var value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3));
console.log(value);
console.log(value.length);
// [ 2, 3, 4 ]
// [ 1, 5 ]
// 2

// ===== 파라미터 모두(3개)(시작,끝,삭제한 부분 대체할 값(들)) 작성 =====
var value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3, 10, 11)); // (시작,끝, N개의 삭제한 부분에 넣을 값들)
console.log(value);
console.log(value.length);
// [2, 3, 4]
// [ 1, 10, 11, 5 ]
// 3

// ===== 파라미터 넣지 않은 경우 =====
var value = [1, 2, 3, 4, 5];
console.log(value.splice());
console.log(value);
console.log(value.length);
// []
// [ 1, 2, 3, 4, 5 ]
// 5
/**
 * Array.splice() 는 파라미터가 필수임
 * 아무 값도 파라미터로 넘기지 않을 시, JS엔진 내부에서는 "난 모르겠네" 하고 빈 배열 결과를 반환
 * 원본 배열에는 변화 X
 */
