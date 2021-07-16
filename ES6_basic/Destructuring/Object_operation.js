// ===== 같은 프로퍼티 이름 사용 =====
// ES5 까지는 하나의 오브젝트의 같은 이름의 프로퍼티를 작성하면 에러를 발생
// ES6+ 부터는 에러를 발생시키지는 않고, 마지막에 선언한 프로퍼티로 할당
{
  const value = { book: 10, book: 20 };
  console.log(value);
}
// { book: 20 }

// ===== Shorthand Property Names
{
  const one = 10,
    two = 20;
  const value = { one, two };
  console.log(value);
}
// { one: 10, two: 20 }
/**
 * 변수들의 이름과 값으로, Object 를 만드는 방법
 * MDN 에 작성된 것이고, 공식 스펙에 정의 된 것은 아니다.
 */

// ===== 문자열을 프로퍼티 이름으로 사용 =====
{
  const value = {
    ["one" + "two"]: 12,
  };
  console.log(value.onetwo);
}
// 12

// ===== ★ 변숫값을 프로퍼티 이름으로 사용 =====
{
  const item = "world";
  const sports = {
    [item]: 100,
    [item + " Cup"]: "월드컵",
    [item + "Sports"]: function () {
      return "스포츠";
    },
  };
  console.log(sports[item]);
  console.log(sports[item + " Cup"]);
  console.log(sports[item + "Sports"]());
}
// 100
// 월드컵
// 스포츠
/**
 * 이 방식은 간혹 사용을 한다.
 * 조건에 따른 실행값 작성이 아니라
 * 값에 따른 실행값이 다르게 발생하도록 제어할 수 있기 떄문에
 * 코드가 더욱 간결해지고, 가독성이 좋아진다.
 */
