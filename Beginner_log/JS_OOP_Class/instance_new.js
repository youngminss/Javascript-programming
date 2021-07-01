// ===== JS 인스턴스 생성 =====
var Book = function (point) {
  this.point = point;
};
Book.prototype.getPoint = function () {
  return this.point + 100;
};
var oneInstance = new Book(200);
console.log(oneInstance.getPoint());
// 300
/**
 * [Flow]
 * - Book 이라는 이름으로 Function 오브젝트를 정의
 * - this 키워드는 지금 수준에서는 "현재 생성된 인스턴스"를 의미한다는 정도로 이해
 * - Book 이라는 오브젝트에 prototype 에 getPoint 라는 메소드를 연결시켰고, 내부로직까지 정의함
 * - oneInstance 라는 이름의 Book 인스턴스를 200 값의 생성자함수의 파라미터로 넘기면서 생성
 * - Book 인스턴스인 oneInstance 의 등록된 getPoint 메소드를 호출해서, 결과를 확인
 */

// ===== instanceof 연산자 =====
var Book = function (point) {
  this.point = point;
};
Book.prototype.getPoint = function () {
  return this.point + 100;
};
var oneInstance = new Book(200);
console.log(oneInstance instanceof Book);
console.log(oneInstance instanceof String);
console.log(oneInstance instanceof Object);
// true
// false
// true
/**
 * oneInstance 인스턴스는 Book 오브젝트로 부터 생성된 인스턴스니까 => true
 * String 오브젝트와 연산해보면 당연히 => false
 * Object 오브젝트와 연산하면 => true 가 나온다 => 왜 ? => 모든 오브젝트는 내부적으로 공통된 빌트인 Object 특성을 가지고 있기 때문이라고 생각한다.
 */
