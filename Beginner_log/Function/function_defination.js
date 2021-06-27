// 방식 1 (함수만 선언하고 정의)
function setBookTitle() {
  var title = "JS 책";
}
// 아..이 함수는 "책 이름을 설정하는 함수구나."

// 방식 2 (변수에 함수를 선언하고 정의)
var calculatePoint = function (point1, point2) {
  var totalPoint = point1 + point2;
  return totalPoint;
};
// 아..이 함수는 point 2개를 받아서 합한 point 값을 계산해주는 함수구나.
