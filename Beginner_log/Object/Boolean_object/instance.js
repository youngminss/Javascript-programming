// ===== new Boolean() 인스턴스 생성 =====
// ===== false 로 변환 =====
var value = [undefined, null, NaN, 0, ""];
for (var i = 0; i < value.length; i++) {
  var obj = new Boolean(value[i]);
  console.log(obj);
  console.log(obj.valueOf());
  console.log(obj + 1);
  console.log(typeof obj);
}
// [Boolean: false]
// false
// 1
// object
// [Boolean: false]
// false
// 1
// object
// [Boolean: false]
// false
// 1
// object
// [Boolean: false]
// false
// 1
// object
// [Boolean: false]
// false
// 1
// object

// ===== true 로 변환 =====
var value = [12, "1", "0", "false"];
for (var i = 0; i < value.length; i++) {
  var obj = new Boolean(value[i]);
  console.log(obj);
  console.log(obj.valueOf());
  console.log(obj + 1);
  console.log(typeof obj);
}
// [Boolean: true]
// true
// 2
// object
// [Boolean: true]
// true
// 2
// object
// [Boolean: true]
// true
// 2
// object
// [Boolean: true]
// true
// 2
// object

// ===== Boolean() 값으로 변환 =====
var value = [12, "1", "0", "false"];
for (var i = 0; i < value.length; i++) {
  var obj = Boolean(value[i]);
  console.log(obj);
  console.log(obj.valueOf());
  console.log(obj + 1);
  console.log(typeof obj);
}
// true;
// true;
// 2;
// boolean;
// true;
// true;
// 2;
// boolean;
// true;
// true;
// 2;
// boolean;
// true;
// true;
// 2;
// boolean;
