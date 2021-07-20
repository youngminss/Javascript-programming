{
  const targetWeight = 27;
  const container1 = 7;
  const container2 = 3;

  let answer = null;

  let i = 1;
  while (true) {
    if (container1 * i > targetWeight) {
      break;
    }
    if ((targetWeight % (container1 * i)) % container2 === 0) {
      answer = i + parseInt((targetWeight % (container1 * i)) / container2, 10);
    }
    i++;
  }

  if (answer === null) {
    if (targetWeight % container2 === 0) {
      answer = parseInt(targetWeight / container2, 10);
    } else {
      answer = -1;
    }
  }
  console.log(answer);
}
