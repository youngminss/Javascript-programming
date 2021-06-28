// ===== length 프로퍼티 기본 사용,활용 =====
var value = "ABC";
console.log(value.length);
console.log(value[1]);
// 3
// B

for (var i = 0; i < value.length; i++) {
  console.log(value[i]);
}
// A
// B
// C
