const { instanceOf } = require("prop-types");

// ===== Number 오브젝트 생성 =====
var newNum = new Number(123);
console.log(typeof newNum);
console.log(newNum + 100);
// object
// 223
/**
 * 빌트인 Number 오브젝트 인스턴스 생성한 것이다.
 * 타입은 object로 정상
 */

// ===== Object 오브젝트 생성 =====
var newObj = new Object(123);
console.log(typeof newObj);
console.log(newObj + 100);
// object
// 223
/**
 * Object 오브젝트는 파라미터로 넘긴 데이터 타입에 따라 생성할 인스턴스를 결정한다.
 * 원래는 Object 라면 { 키 : 값 } 형태의 오브젝트인데, 여기에 100을 더하면 이상하다.
 * 근데, 파라미터로 123을 넘기면서, newObj 는 Number 오브젝트가 된다.
 * 그렇기 때문에, 두번째 newObj + 100 이 성립이 되는 것이다.
 */

// ===== Object 오브젝트에 파라미터를 넘기지 않을 시 =====
var newObj = new Object();
console.log(newObj);
console.log(typeof newObj);
// {}
// object
/**
 * Object 오브젝트에 파라미터로 아무값도 넘기지 않는다면, 빈 {} 를 반환한다.
 * 타입은 object
 */

// ===== Object() =====
var obj = Object({ name: "Javascript" });
console.log(obj);
// { name: 'Javascript' }
/**
 * 오브젝트형식을 파라미터로 넘긴다.
 * 결과값의 프리미티브 값 역시 오브젝트
 */
var emptyObj = Object();
console.log(emptyObj);
// {}
/**
 * 파라미터가 존재하지 않을 시, 빈 오브젝트 반환
 */

// ===== Object() 사용 =====
var obj = Object({ name: "value" });
console.log(obj);
console.log(typeof obj);
console.log(obj instanceof Object);
// { name: 'value' }
// object
// true
/**
 * 마지막에 "인스턴스 instanceof 오브젝트타입"
 * 인스턴스가 해당 오브젝트 타입인지 true OR false 로 판단한다.
 */

// ===== Object 리터럴{} 사용 =====
var obj = { name: "value" };
console.log(obj);
console.log(obj instanceof Object);
// { name: 'value' }
// true
/**
 * Object() 와 Object 리터럴 {} 은 동일한 효과
 * 고로, 개발자의 편의성을 위해, 보통 {} 리터럴을 쓴다.
 */

// ===== 프리미티브 값 반환 valueOf() =====
var obj = { soccer: "축구" };
console.log(obj.valueOf());
// { soccer: '축구' }
