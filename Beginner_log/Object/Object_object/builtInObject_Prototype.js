// ===== isPrototypeOf() =====
var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj));
// true
/**
 * Object.prototype.isPrototypeOf()
 * = 파라미터로 들어오는 것이, Object 프로토타입 존재 여부를 묻는다.
 * 존재하면 true 아니면 false
 */

// ===== toString() =====
var point = { book: "책" };
console.log(point.toString());
// [object Object]
/**
 * 빌트인 Object에 proto에 toString() 이 호출
 */
var obj = new Number(123);
console.log(Object.prototype.toString.call(obj));
// [object Number]
/**
 * 빌트인 Number 오브젝트 prototype에 toString() 이 호출
 */

// ===== toLocaleString() =====
console.log((1234.56).toLocaleString());
console.log("1234.56".toLocaleString());
// 1,234.56
// 1234.56
/**
 * 빌트인 Number 오브젝트에는 toLocaleString 메소드가 존재해서 호출
 * 빌트인 String 오브젝트에는 toLocalString 메소드가 존재하지 않아, 빌트인 Object 에 prototype에 toLocaleString 메소드가 호출 된 것
 */
