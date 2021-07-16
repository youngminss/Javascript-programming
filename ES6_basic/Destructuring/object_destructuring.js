// ===== 프로퍼티 값 할당 =====
{
  const { one, two } = { one: 10, two: 20 };
  console.log(one);
  console.log(two);
}
// 10
// 20
/**
 * 일반 오브젝트 프로퍼티 분할 할당은 할당받을 변수의 이름도, 분할하는 오브젝트의 이름과 같아야한다.
 */

// ===== 프로퍼티 이름을 별도로 작성 =====
{
  let one, two;
  ({ one, two } = { one: 10, two: 20 });
  console.log(one);
  console.log(two);
}
// 10
// 20
/**
 * 할당받을 변수에 선언과 할당을 따로 하려면
 * () 소괄호가 반드시 필요
 */

// ===== 값 위치에 변수 이름 작성 =====
{
  let five, six;
  ({ one: five, two: six } = { one: 1, two: 2 });
  console.log(five);
  console.log(six);
  // console.log(one);
}
// 1
// 2
// ReferenceError: one is not defined
/**
 * 마지막 referenceError 는 one 과 two 는 각각 five, six 라는 이름으로 할당받는 이후로 참조할 수 없다.
 */

// ===== Object 구조에 맞추어 값 할당 =====
{
  const {
    one,
    plus: { two, three },
  } = { one: 10, plus: { two: 20, three: 30 } };
  console.log(one);
  console.log(two);
  console.log(three);
  // console.log(plus);
}
// 10
// 20
// 30
// ReferenceError: plus is not defined
/**
 * plus 는 단지, 분할하는 오브젝트의 형식에 맞추기 위해 사용한 것
 */

// ===== 나머지를 Object로 할당 =====
{
  const { one, ...rest } = { one: 10, two: 20, three: 30 };
  console.log(one);
  console.log(rest);
}
// 10
// { two: 20, three: 30 }

// ===== 파라미터 값 할당 =====
{
  function add({ one, two }) {
    console.log(one + two);
  }
  add({ one: 10, two: 20 });
}
// 30

// ===== 오브젝트 구조에 맞추어 할당 =====
{
  function add({ one, plus: { two } }) {
    console.log(one + two);
  }
  add({ one: 10, plus: { two: 20 } });
  // add({ one: 10, two: 20 });
}
// 30
// TypeError: Cannot read property 'two' of undefined
