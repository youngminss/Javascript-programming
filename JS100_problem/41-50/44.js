{
  function eachDigitSum(strNumber) {
    let result = 0;
    strNumber.split("").forEach((Digit) => {
      result += parseInt(Digit);
    });
    return result;
  }
  console.log(eachDigitSum(String(18234)));
  console.log(eachDigitSum(String(3849)));

  // 숫자 그대로 사용하는 대로
  // let sum = 0;
  // while (n !== 0) {
  //   sum += n % 10;
  //   n = Math.floor(n / 10);
  // }
  // console.log(sum);
}
