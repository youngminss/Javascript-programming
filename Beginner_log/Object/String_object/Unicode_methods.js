// ===== string.charCodeAt() =====
var value = "1Aa가";
for (var i = 0; i < value.length; i++) {
  console.log(value.charCodeAt(i));
}
// 49
// 65
// 97
// 44032
console.log(value.charCodeAt(10));
// NaN
/**
 * N번째 값이 존재하지 않을 경우, NaN
 * 그 외에는, 원본에서 N번째 값의 아스키코드 값을 반환
 */

// ===== string.fromCharCode() =====
console.log(String.fromCharCode(49, 65, 97, 44032));
// 1Aa가
/**
 * 이것은 String 오브젝트에 존재하는 프로퍼티에 접근해서 사용한 경우이다.
 * 인스턴스에 prototype 을 물려받아 proto 내부에서 사용한 것이 아니다.
 */

// ===== string.localeCompare() =====
var value = "나";
console.log(value.localeCompare("가"));
console.log(value.localeCompare("나"));
console.log(value.localeCompare("다"));
// 1
// 0
// -1
