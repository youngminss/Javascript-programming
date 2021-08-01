{
  function makeRotateMatrix(originMatrix) {
    const row = originMatrix.length;
    const col = originMatrix[0].length;
    let rotateMatrix = Array.from(new Array(row), () => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        rotateMatrix[j][col - i - 1] = originMatrix[i][j];
      }
    }
    return rotateMatrix;
  }
  function makeNewMatrix(originMatrix, rotateMatrix) {
    const row = originMatrix.length;
    const col = originMatrix[0].length;
    let newMatrix = Array.from(new Array(row), () => new Array(col).fill(0));

    for (let i = 0; i < originMatrix.length; i++) {
      for (let j = 0; j < originMatrix[i].length; j++) {
        newMatrix[i][j] = originMatrix[i][j] + rotateMatrix[i][j];
      }
    }
    return newMatrix;
  }

  function rotateStamp(stamp, rotate) {
    for (let i = 0; i < rotate; i++) {
      let newRotateStamp = makeRotateMatrix(stamp);
      stamp = makeNewMatrix(stamp, newRotateStamp);
      // stamp.forEach((s) => {
      //   console.log(s.join(" "));
      // });
    }

    return stamp;
  }

  const stamp = [
    [1, 1, 1, 2],
    [2, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
  ];
  const rotate = 1;
  console.log(rotateStamp(stamp, rotate));
}
