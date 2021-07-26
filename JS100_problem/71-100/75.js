{
  // [내 답안] 3 ~ N 까지 every 체크
  function count369(stringNumber) {
    let result = 0;

    const check369 = (number) => Number(number) !== 0 && (Number(number) % 3 === 0 || Number(number) % 6 === 0 || Number(number) % 9 === 0);

    for (let i = 3; i <= parseInt(stringNumber); i++) {
      if (String(i).split("").every(check369)) {
        console.log(i);
        result++;
      }
    }

    return result;
  }

  console.log(count369("93"));

  // [답안] 규칙적으로 접근한 해설
  // function sol(n) {
  //   let answer = 0;
  //   let count = 1;
  //   const d = { 3: 1, 6: 2, 9: 3 };

  //   while (n.length !== 0) {
  //     answer += d[parseInt(n.pop(), 10)] * count;
  //     count *= 3;
  //   }
  //   return answer;
  // }
}
