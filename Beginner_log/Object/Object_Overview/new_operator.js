// ===== new 연산자 =====
var obj = new Number();
console.log(obj);
console.log(typeof obj);
// [Number: 0]
// object
/**
 * Number 빌트인 object의 "인스턴스" 를 생성하여 반환
 * obj 라는 이름에 변수에 그것을 할당
 * type은 object (Object 아님 !)
 */

var oneObj = new Number("123");
console.log(oneObj.valueOf());
console.log(oneObj);
console.log(typeof oneObj);
// 123
// [Number: 123]
// object

var twoObj = new Number("456");
console.log(twoObj.valueOf());
console.log(twoObj);
console.log(typeof twoObj);
// 456
// [Number: 456]
// object
