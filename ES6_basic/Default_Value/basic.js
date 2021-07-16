// ===== default value =====
{
  const [one, two, five = 50] = [10, 20];
  console.log(five);
}
// 50

// 매칭되는 파라미터 존재하면 -> 디폴트 값 무시
{
  const [one, two, five = 50] = [10, 20, 70];
  console.log(five);
}
// 70

// ===== Object 디폴트 값 =====
{
  const { one, two = 20 } = { one: 10 };
  console.log(one, two);
}
// 10 20

// ===== 디폴트 값 적용 순서 =====
{
  const [one, two = one + 20, five = two + 50] = [10];
  console.log(one, two, five);
}
// 10 30 80
/**
 * 결과가 잘 나옴
 * 즉, 디폴트 값은, 위에서 아래로, 왼쪽에서 오른쪽으로 진행
 */

// ===== 디폴트 값 할당 =====
{
  const add = (ten, two = 20) => ten + two;
  const result = add(10);
  console.log(result);
}
// 30

// ===== 디폴트 값 무시 =====
{
  const add = (ten, two = 20) => ten + two;
  const result = add(10, 50);
  console.log(result);
}
// 60

// ===== 파라미터 값이 undefined 일 때 =====
{
  const point = () => 20;
  const add = (one, two = point()) => one + two;
  const result = add(10, undefined);
  console.log(result);
}
// 30
/**
 * add 함수 파라미터로 undefined 를 넘겨줬지만, 결과적으로 디폴트로 설정해놓은 point 함수의 결과값이 20이 할당이 되어 사용된다.
 * 이는, undefined 를 넘겨서 디폴트 값을 무시하려고 하면, 되려 무시당한다. :)
 */
