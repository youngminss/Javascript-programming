// ===== this 와 prototype =====
function Book() {
  console.log("1 :", this.point);
}
Book.prototype.getPoint = function () {
  this.setPoint();
  console.log("2 :", this.point);
};
Book.prototype.setPoint = function () {
  this.point = 100;
};
var obj = new Book();
obj.getPoint();
// 1 : undefined
// 2 : 100
/**
 * new Book 으로 생성자 함수가 호출되는 시점에서, console이 있고, this.point 에서, 현재 this(obj) 에 point 프로퍼티가 없다.
 * 그렇지만, 에러를 발생하지않고, undefined 를 반환한다.
 *
 * obj.getPoint() 호출 시점에서 this(obj).setPoint() 를 만나고, this(obj).point = 100 을 할당한다.
 * 이 때, this 는 obj 인스턴스를 참조한다.
 * console 에서 this.point 를 반환하는 시점에서는 obj 인스턴스에 point 프로퍼티가 100으로 설정되어 있기 때문에 100을 반환
 */

// ===== this 와 prototype : prototype 메소드 직접 호출 =====
function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var obj = new Book(100);
console.log(obj.getPoint());
console.log(Book.prototype.getPoint());
// 100
// undefined
/**
 * obj.getPoint() 호출시에는 obj 인스턴스 생성시, 생성자 함수에서 this(obj).point 에서 point 를 설정했다.
 * 그렇기 때문에 100이 반환된다.
 * Book.prototype.getPoint() 처럼, 직접 prototype 에 접근할 경우, this(Book.prototype) 에는 point 프로퍼티에 설정이 정의되어 있지 않으므로, undefined 를 반환
 */
