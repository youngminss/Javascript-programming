var obj = { 0: 10, 1: 20, 2: 30 };
var data = [4, 5, 6];

function get() {
  for (var k = 0; k < arguments.length; k++) {
    console.log(arguments[k] + this[k]);
  }
}
// 두번째 파라미터, 데이터가 "배열"형태이고, 이것은 유동적인 데이터를 의미
get.apply(obj, data);
// 14
// 25
// 36
/**
 * get 함수 내부에 this -> obj 를 참조하고, arguments -> 선언해놓은 data를 참조
 * arguments 길이(현재 3)만큼 반복문을 돌며, arguments 배열을 인덱싱하고, this 오브젝트역시, 이름이 위 예시처럼 숫자 인덱싱처럼 표기되어 있으므로 사용가능
 * 이러한 Array-like 형태를, ES6 에서는 더 많이 추구할 수 있다.
 */
