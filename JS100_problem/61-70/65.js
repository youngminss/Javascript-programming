{
  function makeMutationArray(a, b) {
    let turn = true;
    let answer = a.map((el, idx) => {
      if (turn) {
        turn = !turn;
        return [a[idx], b[idx]];
      } else {
        turn = !turn;
        return [b[idx], a[idx]];
      }
    });
    return answer;
  }
  console.log(makeMutationArray([1, 2, 3, 4], ["a", "b", "c", "d"]));
}
