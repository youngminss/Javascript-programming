// - 연산자
console.log("135" - 35);
/**
 * 100
 * - 문자열이지만 숫자 => 숫자로 변환
 */

// * 연산자
console.log(10 * "20");
console.log(10 * true);
console.log(10 * false);
console.log(10 * null);
console.log(10 * "A");
console.log(2.3 * 3);
console.log((2.3 * 10 * 3) / 10);
/**
 * 200
 * 10
 * 0
 * 0
 * NaN  (★)
 * 6.8999999999999995   (★)
 * 6.9  (★)
 */

// / 연산자
console.log(1 / 0);
console.log(0 / 1);
/**
 * Infinity (★)
 * 0
 */

// % 연산자
console.log(3 % 2);
console.log(5 % 2.3);
console.log((5 * 10 - 2 * 2.3 * 10) / 10);
/**
 * 1
 * 0.40000000000000036
 * 0.4
 */
