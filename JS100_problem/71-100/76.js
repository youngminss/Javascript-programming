{
  function countMine(land, row, col, searchRange) {
    let count = 0;
    for (let n = row; n < row + searchRange; n++) {
      for (let m = col; m < col + searchRange; m++) {
        if (land[n][m] === 1) {
          count++;
        }
      }
    }
    return count;
  }

  function maxMineCounter(land, landLength, searchRange) {
    let result = 0;

    for (let i = 0; i <= landLength - searchRange; i++) {
      for (let j = 0; j <= landLength - searchRange; j++) {
        const count = countMine(land, i, j, searchRange);
        if (result < count) {
          result = count;
        }
      }
    }

    return result;
  }

  const land = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 1, 1],
  ];
  const landLength = 5;
  const searchRange = 3;
  console.log(maxMineCounter(land, landLength, searchRange));
}
