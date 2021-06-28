// ===== concat =====
var value = "sports";
value = value.concat("축구", 11, true);
console.log(value);
console.log(typeof value);
// sports축구11true
// string
/**
 * 기준에다가 파라미터로 넘긴 값(값들)을 모두 문자열 취급해서 말 그대로 붙여준다.
 */

var obj = new String(123);
console.log(obj.concat("ABC"));
console.log(typeof obj.concat("ABC"));
// 123ABC
// string

// ===== toLowerCase() , toUpperCase() =====
console.log("ABCDE".toLowerCase());
console.log("abcde".toUpperCase());
// abcde
// ABCDE
