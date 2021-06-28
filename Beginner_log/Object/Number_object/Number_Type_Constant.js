// ===== Number 타입으로 변환 =====
console.log(Number("123") + 500);
console.log(Number("ABC"));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(0x14));
console.log(Number(true));
console.log(Number(false));
// 623
// NaN
// NaN
// 0
// 20
// 1
// 0
/**
 * "123"은 문자열이지만, 문자열숫자이기 때문에 숫자로 변환 가능
 * "ABC"는 단순 문자열이기 때문에 변환 불가 -> Not a Number 변환
 * undefined -> Not a Number 변환
 * null -> 0 으로 변환
 * 0x14 (16진수) -> 10진수로 변환 = 20
 * true -> 1, false -> 0 으로 변환
 */

// ===== Number 상수 =====
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(typeof Number.NEGATIVE_INFINITY);
console.log(typeof Number.NaN);
// 1.7976931348623157e+308
// 5e-324
// Infinity
// -Infinity
// NaN
/**
 * 모두 type은 number
 */
