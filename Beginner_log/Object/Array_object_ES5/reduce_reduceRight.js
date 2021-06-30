// ===== Array.reduce() =====
// ===== 첫 번째 파라미터만(콜백함수) 작성 시 =====
var value = [1, 3, 5, 7];
var fn = function (prev, curr, index, all) {
  console.log(`${prev} , ${curr}`);
  return prev + curr;
};
var result = value.reduce(fn);
console.log(`결과 : ${result}`);
// 1 + 3
// 4 + 5
// 9 + 7
// 결과 : 16
/**
 * 앞에서 부터 뒤로 진행
 * 맨 처음 엘리먼트 + 그 다음 엘리먼트 = 새로운 맨 처음 엘리먼트
 */

// ===== 파라미터가 2개(콜백함수, 초깃값) 작성 시 =====
var value = [1, 3, 5];
var fn = function (prev, curr, index, all) {
  console.log(`${prev} , ${curr}`);
  return prev + curr;
};
var result = value.reduce(fn, 7);
console.log(`반환 : ${result}`);
// 7 , 1
// 8 , 3
// 11 , 5
// 반환 : 16
/**
 * 초기값을 reduce() 메소드 호출시, 두번쨰 파라미터 값으로 넘겨줄 경우
 * 맨 청므 엘리먼트 값은, 초기값으로 넘겨준 값으로 고정
 */

// ===== Array.reduceRight() =====
var value = [1, 3, 5, 7];
var fn = function (prev, curr, index, all) {
  console.log(`${prev} , ${curr}`);
  return prev + curr;
};
var result = value.reduceRight(fn);
console.log(`반환 : ${result}`);
// 7 , 5
// 12 , 3
// 15 , 1
// 반환 : 16
/**
 * Array.reduce() 와 기능을 같으나, 차이점은 배열의 뒤에서부터 시작한다는 점
 */
