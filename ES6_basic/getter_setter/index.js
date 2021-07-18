/**
 * getter, setter
 */

// ===== ES5 getter 형태 =====
{
  var book = {};
  Object.defineProperty(book, "title", {
    get: function () {
      return "책";
    },
  });
  console.log(book.title);
}
// 책
/**
 * ES5 에서는 프로퍼티를 설정하고, get 이라는 function 을 할당해서 사용하는 것
 */

// ===== ES6+ getter 형태 =====
{
  var book = {
    point: 100,
    get getPoint() {
      return this.point;
    },
  };
  console.log(book.getPoint);
}
// 100
/**
 * book 오브젝트 내부에, getPoint 라는 함수형태의 getter 를 정의해놓음
 * 실제 사용시에는 프로퍼티처럼 이름만 제시한다. (호출하는 것과 같다.)
 */

// ===== 다수의 getter 가능 =====
{
  const book = {
    get getPoint() {
      return "포인트";
    },
    get getTitle() {
      return "제목";
    },
  };
  console.log(book.getPoint);
  console.log(book.getTitle);
}
// 포인트
// 제목
/**
 * 여러 개의 getter 설정 가능
 */

// ===== ES5 setter 형태 =====
{
  var book = { title: "HTML" };
  Object.defineProperty(book, "change", {
    set: function (param) {
      this.title = param;
    },
  });
  book.change = "JS";
  console.log(book);
}
// { title: 'JS' }

// ===== ES6 setter 형태 =====
{
  const book = {
    point: 100,
    set setPoint(param) {
      this.point = param;
    },
  };
  book.setPoint = 200;
  console.log(book);
}
// { point: 200, setPoint: [Setter] }
/**
 * set 키워드를 쓴 함수는 출력시 [Setter] 라고 따로 명시하는게 보이는가
 */

// ===== setter 삭제 =====
{
  const name = "setPoint";
  const book = {
    point: 100,
    set [name](param) {
      this.point = param;
    },
  };
  delete book[name];
  console.log(book[name]);
}
// undefined
