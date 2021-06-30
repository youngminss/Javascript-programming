// ===== forEach() =====
// 반복 도중에 엘리먼트 "추가"
var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list.push("AB");
  }
  console.log(el);
};
list.forEach(fn);
// 1
// 2
// 3
/**
 * forEach() 가 실행되는 순간부터는 중간에 원본데이터가 업데이트 되어도 고정이다.
 */
console.log(list);
// [ 1, 2, 3, 'AB' ]
/**
 * forEach() 처리가 끝난 이후에는, 중간에 업데이트 된 내용이 반영 되어있다.
 */

// ===== 현재 인덱스보다, 큰 인덱스 값 "업데이트" =====
var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list[2] = 345;
  }
  console.log(el);
};
list.forEach(fn);
// 1
// 2
// 345
/**
 * 현재 인덱스보다 큰 인덱스 값을 변경하면 중간에 변경된 값으로 업데이트 된다.
 */

// ===== 현재 인덱스보다 큰 인덱스의 엘리먼트를 "삭제"할 경우 =====
var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    delete list[2];
  }
  console.log(el);
};
list.forEach(fn);
1;
2;
/**
 * 현재 인덱스보다 큰 인덱스의 엘리먼트를 중간에 "삭제"할 경우 반영된다.
 */

// ===== forEach() 실행시간 측정 =====
var check = function () {};
var list = [];
for (var i = 0; i < 1000000; i++) {
  list.push(i + 1);
}
var start = Date.now();
list.forEach(check);
var end = Date.now();
console.log(`${end - start}ms`);
