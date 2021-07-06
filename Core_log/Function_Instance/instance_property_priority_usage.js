// ===== prototype 프로퍼티보다, 인스턴스 프로퍼티 우선 사용 =====
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return 100;
};
var obj = new Book(200);

obj.getPoint = function () {
  return this.point;
};
console.log(obj.getPoint());
// 200
/**
 * 즉, Book.prototype 에 getPoint 가 아닌, obj 인스턴스의 getPoint 프로퍼티를 찾아 호출했다는 것이다.
 * prototype 과 인스턴스의 동일한 이름의 식별자가 있다면, 인스턴스를 우선적으로 사용한다.
 */
