// ===== 빈 배열 =====
var obj = new Array();
console.log(typeof obj);
console.log(obj.length);
// object
// 0
/**
 * new 키워드로 빈 배열 오브젝트 인스턴스를 생성
 * 아무 값도 없기 때문에, default length 는 0
 */

// ===== 값을 작성한 배열 =====
var one = new Array(10, 20);
console.log(one);
console.log(one.length);
// [ 10, 20 ]
// 2
/**
 * 1차원 배열 인스턴스 생성, length 는 2
 */
var two = new Array([10, 20]);
console.log(two);
console.log(two.length);
// [ [ 10, 20 ] ]
// 1
/**
 * 2차원 배열 인스턴스 생성, length 는 1
 */

// ===== 인스턴스 생성 시, 파라미터 1개 값 넘기기 =====
var obj = new Array(3);
console.log(obj);
console.log(obj.length);
// [ <3 empty items> ] === [ undefined, undefined, undefined ]
// 3
