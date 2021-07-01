// ===== value 속성 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  enumerable: true,
});
for (var name in obj) {
  console.log(`키 : ${name}, 값 : ${obj[name]}`);
}
// 키 : book, 값 : JS북

// ===== value, get/set 같이 작성 불가 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS 북",
  // get: function () {},
});
console.log(obj.value);
/**
 * TypeError: Invalid property descriptor. Cannot both specify accessors and a value 
or writable attribute, #<Object>
 */

// ===== writable : true, 즉, 변경 가능 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 변경 가능
  writable: true,
});
obj.book = "변경 가능"; // book 프로퍼티 값 변경
console.log(obj.book);
// 변경 가능
/**
 * writable 속성을 true 로 주었기 때문에, 기존에 프로퍼티 값을 변경 가능
 */

// ===== writable : false, 즉 변경 불가 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 변경 불가
  writable: false,
});
obj.book = "변경 불가"; // book 프로퍼티 값 변경
console.log(obj.book);
// JS북
/**
 * writable 속성을 false 로 주었기 떄문에, 기존에 프로퍼티 값을 변경할려고 해도 반영이 되지 않음
 */

/**
 * [Note]
 * - 중요한 점은, writable 속성을 false 로 설정하고, 값을 변경하면, 이상적으로는
 * - 컴파일 되지 않고, 에러를 발생하는 것이 정상인데, JS에서는 에러가 발생하지 않고, 값이 변경되지 않음, 즉 프로그램이 죽지 않음
 */

// ===== for ~ in (열거) 가능 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 열거 가능
  enumerable: true,
});
for (var name in obj) {
  console.log(`키 : ${name}, 값 : ${obj.book}`);
}
// 키 : book, 값 : JS북

// ===== for ~ in (열거) 불가능 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 열거 불가능
  enumerable: false,
});
for (var name in obj) {
  console.log(`키 : ${name}, 값 : ${obj.book}`);
}
//   << 빈값
/**
 * 열거 불가능 설정을 했기때문에, for ~ in 문이 작동을 하지 않는다.
 */

// ===== configurable : true, 삭제 가능 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 삭제 가능
  configurable: true,
});
delete obj.book;
console.log(obj.book);
// undefined
/**
 * configurable (삭제가능여부)를 true 로 설정했기 떄문에, 프로퍼티 삭제가 가능
 * book 프로퍼티 값이 JS북 이었지만, delete 연산 이후에 undefined 인 것을 확인
 */

// ===== configurable : false, 삭제 불가능 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 삭제 불가능
  configurable: false,
});
delete obj.book;
console.log(obj.book);
// JS북
/**
 * configurable (삭제가능여부)를 false 로 설정했기 떄문에, 프로퍼티 삭제가 불가능
 * book 프로퍼티 값이 JS북 이었고, delete 연산을 하려해도, 삭제 불가 이기 떄문에, 작동하지 않음
 */
