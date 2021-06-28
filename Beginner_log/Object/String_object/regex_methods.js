// ==== string.match() =====
var value = "Sports";
console.log(value.match(/s/));
console.log(value.match(/or/));
console.log(value.match(/z/));
console.log("SportsSports".match(/s/g));
// ['s']
// ['or']
// null
// [ 's', 's' ]
/**
 * 정규표현식 조건에 맞는 가장 처음 등장하는 문자열을 반환
 * g 조건을 마지막에 붙이면, 조건에 맞는 모든 문자열 반환
 */
console.log(value.match("s"));
console.log(value.match("or"));
console.log(value.match("z"));
// ['s']
// ['or']
// null
/**
 * 정규표현식 대신, 조건으로 넣을 것을 문자열로 넘거도 동일
 */

// ===== string.replace() =====
var value = "abcabc";
console.log(value.replace(/a/, "바꿈"));
console.log(value.replace(/a/g, "바꿈"));
console.log(value.replace(/z/g, "바꿈"));

// 바꿈bcabc
// 바꿈bc바꿈bc
// abcabc
/**
 * (정규표현식, 대체할 값) 순
 * 정규표현식에 맞는 값이 존재하지 않을 경우, 원래 값 그대로를 반환
 */

// ===== string.search() =====
var value = "cbacba";
console.log(value.search(/c/));
console.log(value.search(/c/g));
console.log(value.search(/z/));
// 0
// 0
// -1
/**
 * search() 메소드는 정규표현식의 g 옵션 지원 X
 */

// ===== string.split() =====
console.log("12_34_56".split("_"));
// ["12", "34", "56"]

var value = "123";
console.log(value.split(""));
console.log(value.split());
// [ '1', '2', '3' ]
// [ '123' ]

var value = "12_34_56_78";
console.log(value.split("_", 3));
console.log(value.split("A"));
// [ '12', '34', '56' ]
// [ '12_34_56_78' ]
/**
 * (분리자, [앞에서부터 반환할 수])
 * 분리자에 맞는 것이, 원본 안에 없으면, 원본을 반환
 */
