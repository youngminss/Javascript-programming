{
  function jumppingRabbit(stoneDurations, rabbits) {
    let isPassRabbit = [];
    let copyStoneDurations = [...stoneDurations];

    for (let rabbit of rabbits) {
      let currentIdx = -1;
      let surviveRabbit = true;

      while (true) {
        currentIdx += rabbit;
        if (currentIdx >= copyStoneDurations.length) {
          break;
        }
        if (copyStoneDurations[currentIdx] <= 0) {
          surviveRabbit = false;
          break;
        }
        copyStoneDurations[currentIdx]--;
      }
      if (!surviveRabbit) {
        isPassRabbit.push("fail");
      } else {
        isPassRabbit.push("pass");
      }
    }

    return isPassRabbit;
  }

  const durations = [1, 2, 1, 4];
  const rabbits = [2, 1];
  console.log(jumppingRabbit(durations, rabbits));
}

// [1, 2, 1, 4], [2, 1] =>	['pass', 'pass']
// [1, 2, 1, 4, 5, 2], [2, 1, 3, 1] =>	['pass', 'pass', 'fail', 'fail']
