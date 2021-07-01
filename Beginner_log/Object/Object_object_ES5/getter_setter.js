// ===== getter 정의 =====
var obj = {};
Object.defineProperty(obj, "book", {
  get: function () {
    return "JS 책";
  },
});
var result = obj.book;
console.log(result);
// JS 책
/**
 * obj.book 명령어를 만나면, 정의한 obj 의 getter 함수가 호출된다.
 * getter 에 반환 값인 JS 책이 반환이 되고, 그 값이 result 에 할당 된다.
 */

// ===== setter 정의 =====
var obj = {},
  data = {};
Object.defineProperty(obj, "book", {
  set: function (param) {
    data.title = param;
  },
  get: function () {
    return data.title;
  },
});
obj.book = "JS 책";
console.log(obj.book);
console.log(obj);
console.log(data);
// JS 책
// {}
// { title: 'JS 책' }
/**
 * obj 오브젝트에 JS 책이라는 값을 직접 설정하려고 하는데, value 값이 내부에 없다.
 * 정의했던 setter 함수가 실행이된다.
 * 이 때, console 로 찍힌, JS 책은 obj 오브젝트의 value 가 아니라, data 오브젝트에 저장된 value 값인 것을 확인
 */
