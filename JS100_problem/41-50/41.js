{
  // 에라토스테네스의 체 (1 ~ 1000)
  function makePrimes(number) {
    let numbers = [false, false];
    let prime = [];
    for (let i = 0; i < number - 1; i++) {
      numbers.push(true);
    }
    for (let i = 2; i < number + 1; i++) {
      if (numbers[i]) {
        prime.push(i);
        for (let j = 2 * i; j < number + 1; j += i) {
          numbers[j] = false;
        }
      }
    }
    return prime;
  }

  let primesArray = makePrimes(1000);
  for (let i = 0; i < primesArray.length; i++) {
    if (primesArray[i] <= 1) {
      if (primesArray[i] === 1) {
        console.log("YES");
        break;
      }
    } else {
      console.log("NO");
      break;
    }
  }
}
