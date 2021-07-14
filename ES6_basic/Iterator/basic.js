// ===== 이터레이션 =====
// const list = [10, 20];
// for (let value of list) {
//   console.log(value);
// }
// { value: 10, done: false }
// { value: 20, done: false }
// const obj = list[Symbol.iterator]();
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// { value: undefined, done: true }
/**
 * for ~ of 연산자 => 이터레이블면 가능
 * Symbol.iterator => 이터레이터 오브젝트를 반환하는 생성자
 * 자세한 것은, Symbol 오브젝트 파트에서..
 */

// ===== 이터러블 프로토콜 =====
// const list = [10, 20];
// console.log(list[Symbol.iterator]);
// // [Function: values]

// const obj = { one: 10, two: 20 };
// console.log(obj[Symbol.iterator]);
// undefined
/**
 * obj 는 Symbol.iterator 즉, 이터레이터가 없으므로
 * obj 는 이터러블 오브젝트가 아니다.
 * for 문의 반복과 이터레이션이 차이가 있듯이
 * for ~ in 의 연결과 이터레이션은 차이가 있다.
 */

// ===== 이터레이터 오브젝트 =====
const list = [10, 20];
const iteratorObj = list[Symbol.iterator]();
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
// { value: 10, done: false }
// { value: 20, done: false }
// { value: undefined, done: true }
/**
 * list[Symbol.iterator]() 를 통해, 이터레이션 오브젝트(= 이터레이터) 를 생성한다.
 * next() 를 통해, "이터레이터를 호출한다."
 * { value : 10, done : false } 라는 오브젝트가 처음 출력되고
 * 여기서, done 은, 아직 이터레이터가 끝나지 않았음을 의미한다. ( 이터레이터의 상태 )
 * next() 를, 반복하다가, done : true 는 이터레이터가 더이상 반복할 것이 존재하지 않음을 의미한다.
 */
