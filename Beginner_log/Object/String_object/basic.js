// ===== String object 기본 =====
var value = String(123);
console.log(value);
console.log(typeof value);
// 123
// string

var value2 = String();
console.log(value2);
console.log(typeof value2);
/**
 *   <- (빈 문자열 존재하는 것)
 * string
 */

// ===== String 인스턴스 =====
var obj = new String(123);
console.log(obj);
console.log(obj.valueOf());
console.log(typeof obj);
// [String: '123']
// 123
// object
/**
 * String 인스턴스의 타입 === object 타입 이라는 것
 * Primitive Value 도 역시 존재한다.
 */

var obj2 = new String(123);
console.log(obj2 + 456);
console.log(typeof (obj2 + 456));
console.log(obj2 + "일이삼");
console.log(typeof (obj2 + "일이삼"));
// 123456
// string
// 123일이삼
// string
/**
 * Number 오브젝트 인스턴스와 마찬가지로, 새로운 값과의 연산도 가능
 */
