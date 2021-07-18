{
  console.log(NaN == false);
  console.log(1 == false);
  console.log("" == false);
  console.log(0 == false);
  console.log(undefined == false);

  // 값만 비교
  // false
  // false
  // true
  // true
  // false

  console.log(NaN === false);
  console.log(1 === false);
  console.log("" === false);
  console.log(0 === false);
  console.log(undefined === false);

  // 값,타입 모두 비교 (false/true 타입 => boolean)
  // false
  // false
  // false
  // false
  // false

  // 각 타입 출력
  console.log(typeof NaN);
  console.log(typeof 1);
  console.log(typeof "");
  console.log(typeof 0);
  console.log(typeof undefined);

  // number
  // number
  // string
  // number
  // undefined
}
