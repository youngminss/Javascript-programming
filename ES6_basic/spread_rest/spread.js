// ===== spread 형태 =====
// const list = [21, 22];
// console.log([11, ...list, 12]);
// console.log(Array.isArray([11, ...list, 12]));
// [ 11, 21, 22, 12 ]
// true
/**
 * 11 , 12 사이에, list Array 오브젝트를 spread 하여 분리하고, 하나씩 전개한다.
 */

// const obj = { key: 50 };
// console.log({ ...obj });
// console.log(typeof { ...obj });
// { key: 50 }
// object
/**
 * obj 는 기본적으로 이터러블은 아니지만, 전개는 가능한다.
 * spread 를 할때, 바깥쪽에 {} 를 작성할 것
 */

// ==== Array 형태 spread =====
// const one = [21, 22];
// const two = [31, 32];
// const result = [11, ...one, 12, ...two];
// console.log(result);
// console.log(result.length);
// [ 11, 21, 22, 12, 31, 32 ]
// 6

// ===== String 형태 spread =====
// const target = "ABC";
// console.log([...target]);
// [ 'A', 'B', 'C' ]
/**
 * ABC string 을 문자단위로 분리해서 전개한 것
 * 바깥쪽 [] 는 없어도 되지만, 명확한 분리 결과를 보기위해 작성한 것
 */

// ===== Object 형태 spread =====
// const one = { key1: 11, key2: 22 };
// const result = { key3: 33, ...one };
// console.log(result);
// { key3: 33, key1: 11, key2: 22 }

// ===== Object 형태 spread(프로퍼티 이름 같은 경우)=====
// const two = { music: 20, book: 10 };
// const result1 = { book: 30, ...two };
// console.log(result1);
// { book: 10, music: 20 }
/**
 * 오브젝트를 spread 할 때, 같은 이름의 프로퍼티가 존재하면, spread 하는 프로퍼티 값으로 대체
 */

// ===== push 와 spread =====
let result = [21, 22];
const five = [51, 52];
result.push(...five);
console.log(result);
// [ 21, 22, 51, 52 ]

result.push(..."abc");
console.log(result);
// [21, 22, 51, 52, "a", "b", "c"]
