// ===== Destructuring =====
// let one, two, three;
// const list = [1, 2, 3];
// [one, two, three] = list;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(list);
// 1
// 2
// 3
// [ 1, 2, 3 ]
/**
 * 원본은 파괴되지 않는다.
 * 그저,말 그대로 분할해서 할당하는 느낌
 */

// ===== 할당받을 변수 수가 적은 경우 =====
// let one, two;
// [one, two] = [1, 2, 3];
// console.log(one);
// console.log(two);
// 1
// 2
/**
 * 앞에서 부터 잘 짤라서 들어간다.
 */

// ===== 할당받을 변수 수가 더 많은 경우 =====
// let one, two, three, four;
// [one, two, three, four] = [1, 2, 3];
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// 1
// 2
// 3
// undefined
/**
 * 분할할 배열의 크기보다 할당할 그릇의 갯수가 더 많으면 -> undefined 처리
 */

// ===== 배열 차원에 맞추어 분할 할당 =====
// let one, two, three, four;
// [one, two, [three, four]] = [1, 2, [3, 4]];
// console.log([one, two, three, four]);
// [ 1, 2, 3, 4 ]
/**
 * TypeError: undefined is not a function
 * 할당할 그릇의 차원이 분할할 것의 차원고 맞지 않으면, 에러 발생
 */

// ===== 인덱스에 변수가 없을 때 =====
// let one, two, three, four;
// [one, , , four] = [1, 2, 3, 4];
// console.log([one, two, three, four]);
// [ 1, undefined, undefined, 4 ]
/**
 * 할당할 곳에 변수가 없으면, undefined
 */

// ===== 나머지를 전부 할당 =====
// let one, rest;
// [one, ...rest] = [1, 2, 3, 4];
// console.log(one);
// console.log(rest);
// 1
// [ 2, 3, 4 ]

// ===== 인덱스를 반영한 나머지 할당 =====
let one, three, rest;
[one, , three, ...rest] = [1, 2, 3, 4, 5];
console.log(three);
console.log(rest);
// 3
// [ 4, 5 ]
