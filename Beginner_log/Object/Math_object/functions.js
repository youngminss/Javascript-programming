// ===== 절댓값 반환 (Math.abs()) =====
console.log(Math.abs(-123));
console.log(Math.abs(-Infinity));
// 123
// Infinity

// ===== 소수 이하 버림 (Math.floor()) =====
console.log(Math.floor(5.3));
console.log(Math.floor(-1.7));
console.log(Math.floor(-1.0));
// 5
// -2
// -1

// ===== 소수 이하 올림 (Math.ceil()) =====
console.log(Math.ceil(5.1));
console.log(Math.ceil(-1.7));
console.log(Math.ceil(-0.3));
// 6
// -1
// -0
/**
 * 마지막 -0 << ?? 그냥 0일텐데
 */

// ===== 소수 이하 반올림 (Math.round()) =====
console.log(Math.round(5.1));
console.log(Math.round(5.5));
console.log(Math.round(-1.6));
console.log(Math.round(-1.3));
// 5
// 6
// -2
// -1

// ===== 최대, 최소 (Math.max(), Math.min()) =====
console.log(Math.max(5, 3, 9));
console.log(Math.max(5, 3, "A"));
console.log(Math.min(5, 3, 9));
console.log(Math.min(5, 3, "A"));
// 9
// NaN
// 3
// NaN
/**
 * (최대 or 최소)를 찾을 리스트 중에, 숫자가 아닌 것이 하나라도 있다면, NaN 반환
 */

// ===== N제곱 값 반환 (Math.pow()) =====
console.log(Math.pow(10, 2));
console.log(Math.pow(10, 0));
console.log(Math.pow("A", 1));
console.log(Math.pow(1, "A"));
console.log(Math.pow(1));
// 100
// 1
// NaN
// NaN
// NaN
/**
 * 두번째 파라미터 (N승)의 정보가 없다면 NaN
 * 숫자가 아닌것의 N승을 구하려고하면, NaN
 */

// ===== 난수 반환 (Math.random()) =====
console.log(Math.random());
console.log(Math.random());
// 0.1685782692521527
// 0.8546799158626599
/**
 * 매번 실행시 다른 값을 반환 (0이상 ~ 1미만 사이의 난수)
 */
