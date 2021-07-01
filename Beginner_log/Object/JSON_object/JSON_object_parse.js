// ===== 값이 숫자일 때 =====
var value = "123";
try {
  var result = JSON.parse(value);
} catch (error) {
  console.log("JSON 파싱 에러");
}
console.log(result);
console.log(typeof result);
// 123
// number
/**
 * 파싱할 것이 단일 데이터 타입이고, number면 number 형태로 잘 파싱된다.
 */

// ===== true, false =====
var value = "true";
var result = JSON.parse(value);
console.log(result);
console.log(typeof result);
// true
// boolean
/**
 * boolean 또한 단일 파싱일 경우, boolean이면 boolean으로 잘 파싱된다.
 */

// ===== 배열일 경우 =====
var value = '["ABC","가나","12"]';
var result = JSON.parse(value);
console.log(result);
console.log(typeof result);
// [ 'ABC', '가나', '12' ]
// object
/**
 * ★ 주의할 점은, 배열 내부에서의 string 형식의 number는, 파싱 후에도 string 형태이다.
 */

// ===== 오브젝트일 경우 =====
var value = '{ "point" : "123" }';
var result = JSON.parse(value);
console.log(value);
console.log(typeof value);
// { "point" : "123" }
// string
/**
 * ★ 오브젝트일 경우에도 파싱할 경우, 배열과 마찬가지로, string 형태의 number는, 파싱 후에도 string 형태이다.
 */
