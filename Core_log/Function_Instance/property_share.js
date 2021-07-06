// ===== 프로퍼티 공유 시점 =====
function Book() {
  this.point = 100;
}
var obj = new Book();
console.log(obj.getPoint);
// undefined
/**
 * 생성자 함수를 통해, Book 인스턴스를 생성은 했지만, getPoint 라는 프로퍼티는 존재하지 않기 때문에, undefined
 */
Book.prototype.getPoint = function () {
  return this.point;
};
var result = obj.getPoint();
console.log(result);
// 100
/**
 * obj.getPoint() 를 호출하기전에, Book.prototype 에 getPoint() 를 추가했다.
 * 고로, 호출시 생성한 getPoint를 호출할 수 있다.
 * this(obj).point 는 이전에 위에 new Book 을 통해 생성자 함수에서 point를 100으로 설정했기 때문에 결과적으로 100을 반환
 */
