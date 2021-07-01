// ===== 디스크립터 속성 반환 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
  enumerable: true,
});
var desc = Object.getOwnPropertyDescriptor(obj, "book");
for (var key in desc) {
  console.log(`${key} : ${desc[key]}`);
}
// value : 책
// writable : true
// enumerable : true
// configurable : false
/**
 * 속성을 명시하지 않아도, 기본적인 descriptor 속성(value,writable,enumerable,configurable)에 대한 정보는 모두 반환
 */

// ===== 프로퍼티 추가 금지 설정 =====
var obj = {};
Object.preventExtensions(obj);
try {
  Object.defineProperty(obj, "book", {
    value: "JS 책",
  });
} catch (error) {
  console.log("추가 불가");
}
// 추가 불가
/**
 * Object 의 프로퍼티를 추가하기전에, preventExtensions 함수를 통해 "추가 금지" 설정을 했기 떄문에 불가
 * try ~ catch 문의 catch 에서 error 감지
 */

// ===== 프로퍼티 추가 금지 여부 확인 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
});
console.log(Object.isExtensible(obj));
// true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
// false

// ===== 프로퍼티 추가, 삭제 금지 설정 여부 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
});

Object.seal(obj);
try {
  Object.defineProperty(obj, "sports", {
    value: "스포츠",
  });
} catch (error) {
  console.log("추가 불가");
}
// 추가 불가
