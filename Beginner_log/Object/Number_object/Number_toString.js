// ===== 숫자를 String 타입으로 변환 =====
var value = 20;
console.log(value.toString());
console.log(typeof value.toString());
// 20
// string
console.log(20 == value.toString());
console.log(20 === value.toString());
// true
// false

// ===== ★ toString() 을 통해, 진법 변환 =====
var value = 20;
console.log(value.toString(10));
console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));
// 20
// 10100
// 24
// 14
/**
 * 결론은 가능 !
 * toString() 을 그냥 사용하면, 단순히 숫자 -> 문자로 변경하는 용도겠지만
 * toString(변환 진법) 처럼, 파라미터에 변환할 진법을 넘기면, 해당 진법으로 변환해준다.
 */

// ===== 변수가 아닌 숫자에 바로 toString() 사용 시 주의
// console.log(20.toString());
// SyntaxError: Invalid or unexpected token
/**
 * 위에 형식은 에러를 발생한다.
 * JS는 기본적으로 수는 "실수"를 기준으로 하기때문에 .을 명시하는 것까지는 실수구나..하고 받아들임
 * 그 뒤에 한번 더, .을 붙여서 toString() 메소드를 적용할 수 있도록.
 */
console.log((20).toString());
// 20 (string)
