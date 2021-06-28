// ===== string.substring() =====
var value = "01234567";
console.log(value.substring());
console.log(value.substring(2));
console.log(value.substring(2, 5));
// 01234567
// 234567
// 234
/**
 * 파라미터에 아무것도 넘기지 않으면, 시작부터 ~ 끝까지 반환
 * (시작 인덱스, 끝 인덱스) 순인데, 끝 인덱스가 생략되어 있으면, default 로 끝까지 끝까지 반환
 * 끝 인덱스에 "직전"인덱스 값까지 반환한다는 것 확인
 */

// ===== string.substr() =====
console.log(value.substr());
console.log(value.substr(2));
console.log(value.substr(2, 5));
// 01234567
// 234567
// 23456
/**
 * string.substring() 과 오해하지 말 것
 * string.substr() 은, (시작인덱스, 자를 양) 을 파라미터로 넘김
 * 자를 양을 넘기지 않을 시, 기본적으로 끝까지 자름
 */

// ===== string.slice() =====
console.log(value.slice());
console.log(value.slice(2));
console.log(value.slice(2, 5));
// 01234567
// 234567
// 234
/**
 * string.substring() 과 동일한 효과
 */
