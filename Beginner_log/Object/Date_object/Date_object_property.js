// ===== Date 인스턴스 생성 =====
var obj = new Date(2021, 6);
console.log(obj);
console.log(typeof obj);
// 2021-06-30T15:00:00.000Z
// object

// ===== 현재 시간 =====
console.log(new Date());
// 2021-07-01T14:21:48.648Z
/**
 * "시" 에 대한 정보는 조절이 필요해보임
 */

// ===== 문자열로 작성 시 =====
console.log(new Date("2021-07"));
// 2021-07-01T00:00:00.000Z

// ===== 시간 자동 넘김 =====
console.log(new Date(2021, 11, 34));
// 2022-01-02T15:00:00.000Z

// ===== Date.now() =====
console.log(Date.now());
console.log(new Date());
// 1625149515071
// 2021-07-01T14:25:15.074Z
/**
 * 밀리초 표현, UTC 시간 표현
 */
