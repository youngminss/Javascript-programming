{
  function isSameSampleTarget(target, condition, sample) {
    for (let i = 0; i <= sample.length - condition; i++) {
      let sliceIngredient = target.slice(i, i + 4);
      if (sample.includes(sliceIngredient)) {
        return true;
      }
    }
    return false;
  }
  function getSameIngredient(target, condition, samples) {
    let answer = new Set();

    for (let sample of samples) {
      if (isSameSampleTarget(target, condition, sample)) {
        answer.add(sample);
      }
    }

    return Array.from(answer);
  }

  console.log(getSameIngredient("ABCDEFGH", 4, ["EFGHIJKL", "EFGHIJKM", "EFGHIJKZ", "AVGECHID"]));
}
