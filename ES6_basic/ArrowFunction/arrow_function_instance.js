// ===== 메소드로 작성한 경우 ====
// var point = 200;
// const Point = function () {
//   this.point = 100;
// };
// Point.prototype.getPoint = () => {
//   console.log(this.point);
// };
// new Point().getPoint();
// 200
/**
 * prototype 에 화살표함수를 연결하면
 * 함수 안에서 this가 글로벌 오브젝트를 참조한다.
 * console에 this.point 에서 this는 글로벌 오브젝트의 point 값인 200을 출력
 */

// ===== 메소드 안에 화살표함수 작성시, this 사용가능 =====
const Point = function () {
  this.point = 100;
};
Point.prototype.getPoint = function () {
  const add = () => this.point + 20;
  console.log(add());
  [1, 2].forEach((value) => {
    console.log(this.point + value);
  });
};
new Point().getPoint();
// 120
// 101
// 102
/**
 * getPoint 가 일반함수이므로, this 가 생성한 인스턴스를 참조한다.(글로벌 오브젝트)
 * 또한, 화살표함수에서도 this가 생성한 인스턴스를 참조할 수 있다.
 * 화살표 함수의 스코프인 getPoint()의 this를 사용하기 때문이다.
 */
