// ===== isNaN() =====
// ===== true 경우 =====
console.log(isNaN("ABC"));
console.log(isNaN());
// true
// true
/**
 * 문자는 숫자가 아님 => true
 * 빈값 === undefined === 숫자가 아님 => true
 */

// ===== false 경우 =====
console.log(isNaN(123));
console.log(isNaN("123"));
console.log(isNaN(null));
// false
// false
// false
/**
 * 숫자인데 숫자가 아니냐 ? => false
 * 문자열이지만 숫자일 경우 === 숫자로 생각, 근데 숫자가 아니냐 ? => false
 * null을 숫자로 변환 === 0, 근데 숫자가 아니냐 ? => false
 */

// ===== NaN을 비교 =====
console.log(NaN === NaN);
console.log(isNaN(NaN));
console.log(Object.is(NaN, NaN));
// false
// true
// true
/**
 * 주의 깊게 봐야할 부분은 첫번째임
 * 일단, 두번째 isNaN(NaN) => Not a Number 보고 숫자가 아니냐 ? => 응 아냐 => true
 * 세번째, Object.is(value1,value2) => value1 , value2 의 "값"이 같으면 true, 아니면 false 인데 => NaN 과 NaN 은 같다 => true
 * 마지막이 문제인데, NaN === NaN 이면, [타입, 값] 을 둘 다 비교하는 것인데 타입도 같을 테고, 값고, 위에 Object.is() 에 따르면 같아서 true를 반환해야 정상
 * 근데, 실제로는 false !!!!! => 이건 JS 설계 실수라고 함 (실제로 개발자들 사이에 말이 많다고 함)
 */

// ===== isFinite() =====
// ===== false 경우 =====
console.log(isFinite());
console.log(isFinite(0 / 0));
console.log(isFinite(1 / 0));
console.log(isFinite("ABC"));
// false
// false
// false
// false
/**
 * undefined 는 유한 X => false
 * 0 / 0 수가 아님 => false
 * 1 / 0 무한대임 => false
 * "ABC" 는 수가 아님 => false
 */

// ===== true 경우 =====
console.log(isFinite(123));
console.log(isFinite("123"));
console.log(isFinite(false));
console.log(isFinite(true));
console.log(isFinite(null));
// true
// true
// true
// true
// true
/**
 * false === 값으로 0 => true
 * true === 값으로 1 => true
 * null === 값으로 0 => true
 */
