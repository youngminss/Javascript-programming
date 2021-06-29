// ===== 프로퍼티 존재 여부 =====
var obj = { value: 123 };
var own = obj.hasOwnProperty("value");
console.log(own);
// true
/**
 * hasOwnProperty(프로퍼티 키) : 해당 오브젝트에 "프로퍼티 키"를 가지는 프로퍼티가 존재하는지 여부는 true OR false 로 반환
 */

// ===== 값은 체크하지 않는다. =====
var obj = { value: undefined };
var own = obj.hasOwnProperty("value");
console.log(own);
// true
/**
 * true 를 반환
 * hasOwnProperty() 메소드는 파라미터로 넘긴 이름의 프로퍼티가 존재하는지만을 판단
 * 해당 파라미터 키의 값은 상관없다.
 */

// ===== 자신이 만든 것인지를 체크 =====
var obj = {};
var own = obj.hasOwnProperty("hasOwnProperty");
console.log(own);
// false
/**
 * {} << 빌트인 오브젝트를 생성했을 것이고
 * 그러면, 기본 내부 프로퍼티에는 hasOwnProperty 가 분명히 존재할 것이다.
 * 그렇지 않으면, obj.hasOwnProperty 라는 메소드 호출에서 에러가 발생했겠지
 * 그런데, 컴파일은 되었고, 값은 false
 * 이는, hasOwnProperty() 메소드는, 개발자가 만든 것이 아닌, 기본 프로퍼티를 찾을 경우 false를 반환한다.
 */

// ===== 열거 가능 =====
var obj = { sports: "축구" };
console.log(obj.propertyIsEnumerable("sports"));
// true
/**
 * 파라미터로 넘긴 오브젝트를 열거할 수 있다면 true 아니면 false를 반환
 */

var obj = { sports: "축구" };
Object.defineProperty(obj, "sports", {
  enumerable: false,
});
console.log(obj.propertyIsEnumerable("sports"));
// false
/**
 * 위에 Object.defineProperty() 에서, enumerable 을 false 설정했기 때문에
 * 열거 불가능이 되어, false 반환
 */
for (var name in obj) {
  console.log(name);
}
/**
 * obj는 열거 불가능 상태이기 때문에 for ~ in 문법을 사용할 수 없다. (생략 됨)
 */
