// ===== 단일 프로퍼티 추가 =====
var obj = {};
Object.defineProperty(obj, "book", {
  value: "JS 북",
  enumerable: true,
});
console.log(obj);
// { book: 'JS 북' }
/**
 * obj 라는 오브젝트에, 이름이 book 이고, 프로퍼티로는 JS 북이며, 열거가능(enumerable) 하다는 속성을 부여한다.
 */

// ===== 복수 프로퍼티 추가 =====
var obj = {};
Object.defineProperties(obj, {
  soccer: {
    value: "축구",
    enumerable: true,
  },
  baseball: {
    value: "야구",
    enumerable: true,
  },
});
console.log(obj);
for (var name in obj) {
  console.log(`${name} : ${obj[name]}`);
}
// { soccer: '축구', baseball: '야구' }
// soccer : 축구
// baseball : 야구
