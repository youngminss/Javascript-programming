// ===== 함수 호출 =====
console.log(Object.create);
console.log(Object.prototype.create);
// [Function: create]
// undefined
/**
 * Object 에 create 라는 "함수"가 존재하므로 "함수" 반환
 * Object.prototype 에는 create 라는 "함수"가 존재하지 않으므로, undefined 반환
 */

// ===== 메소드 호출 =====
console.log(Object.prototype.toString);
var obj = {};
console.log(obj.toString);
// [Function: toString]
// [Function: toString]
/**
 * 첫번째 출력은, Object 인스턴스에 존재하는 toString 함수를 반환
 * 두번째 출력은, Object 에 존재하는 함수를 반환
 * toString 같은 경우는 2가지 모두 지원
 */
