// ===== prototype 에 연결된 프로퍼티 =====
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {};
Book.prototype.setPoint = function () {};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result) {
  console.log(`${key} : ${result[key]}`);
}
// getPoint : function () {}
// setPoint : function () {}

// ===== 프로퍼티 이름 반환 =====
var obj = {};
Object.defineProperties(obj, {
  book: { value: "책" },
  point: { value: 123 },
});
var names = Object.getOwnPropertyNames(obj);
for (var name in names) {
  console.log(`${name} : ${names[name]}`);
}
// 0 : book
// 1 : point
/**
 * 각 프로퍼티의 열거가능 여부를 체크하지 않고, 프로퍼티 이름을 반환
 */

// ===== 열거 가능 프로퍼티 이름만 반환 =====
var obj = {};
Object.defineProperties(obj, {
  book: { value: "책", enumerable: true },
  point: { value: 123 },
});
var names = Object.keys(obj);
for (var name in names) {
  console.log(`${name} : ${names[name]}`);
}
// 0 : book
/**
 * point 프로퍼티는, 열거 가능이 true 로 체크되어 있지 않기 떄문에, keys 연산에 반환되지 않는다.
 */
