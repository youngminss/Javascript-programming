{
  function findPossibleGettingCandy(scores) {
    scores.sort((a, b) => (a < b ? 1 : -1));
    console.log(scores);
    let limit = 1;
    let result = 1;

    for (let i = 1; i < scores.length; i++) {
      if (scores[i - 1] > scores[i]) {
        limit += 1;
        if (limit > 3) {
          return result;
        }
        result += 1;
      } else {
        result += 1;
      }
    }
    return result;
  }
  console.log(findPossibleGettingCandy([97, 86, 75, 66, 55, 97, 85, 97, 97, 95]));
}
