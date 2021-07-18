// 6의 배수인지 확인
{
  function is6multiple(number) {
    return number % 6 === 0 ? true : false;
  }
  console.log(is6multiple(6));
  console.log(is6multiple(11));
  console.log(is6multiple(12));
  console.log(is6multiple(0));
  // true
  // false
  // true
  // true
}
