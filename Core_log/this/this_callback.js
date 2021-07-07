var obj = { value: 100 };
var data = [5, 6, 7];

function callback(el, idx, data) {
  return el + this.value;
}
function get(data) {
  return data.map(callback, obj);
}
var result = get(data);
console.log(result);
// [ 105, 106, 107 ]
/**
 * get() 함수 호출시, data 배열을 파라미터로 넘겨주었다.
 * get 함수 내부에서는, 그 데이터배열에 대해 map 함수를 호출했고, map 함수를 포함 7개 정도의 배열 관련함수들이(forEach문도 이에 해당)
 * 콜백함수를 파라미터로 넘길수 있고, 두번쨰 파라마터로 obj 를 넘길 수 있다.
 * 이런 형식은, 각 함수마다 차이가 있으니, 검색하여 공부하는 것이 필요하다.
 * 현재 callback 함수 내부에서는 element 로는 넘겨준 data 배열 원소 하나하나이고
 * this는 파라미터로 넘긴 obj ( value : 100 )에 해당하는 것이다.
 */
