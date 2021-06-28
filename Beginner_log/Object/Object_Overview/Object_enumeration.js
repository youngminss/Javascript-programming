// ===== 프로퍼티 값 추출 =====
var obj = { book: "책" };
console.log(obj.book);
console.log(obj["book"]);
console.log(obj["sports"]);
// 책
// 책
// undefined
/**
 * 마지막 "sports" 를 키로 하는 value가 존재하지 않기 때문에, undefined
 */

// ===== 프로퍼티 열거 =====
var sports = {
  soccer: "축구",
  baseball: "야구",
};
for (var item in sports) {
  console.log(item, sports[item]);
}
// soccer 축구
// baseball 야구
/**
 * 키,값 형식으로 출력한 것
 * for 키 in object 형태이다.
 */
