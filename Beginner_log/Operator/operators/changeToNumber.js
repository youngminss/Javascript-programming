var value;
console.log(10 + value);

/**
 * NaN
 * - 10 = 숫자
 * - value = undefined => NaN 으로 변환
 * - 10 + value = NaN
 */

console.log(10 + null);
console.log(10 + true);
console.log(10 + false);

/**
 * 10
 * 11
 * 10
 * - null => 0 으로 변환
 * - true => 1 로 변환
 * - false => 0 으로 변환
 */

console.log(10 + "123");
console.log(123 - "23");

/**
 * 10123
 * 100
 * - 10(숫자) + '123'(문자열) = + 연산의 경우만 !, 단순한 연결
 * - 123(숫자) - '23'(문자열) => 숫자로 변환 = 123 - 23 = 100
 */
