function checkPossibleMatrixMultiple(m1Row, m1Col, m2Row, m2Col) {
  return m1Col === m2Row && m1Row === m2Col ? true : false;
}

function matrixMultiple(m1, m2) {
  const m1Row = m1.length;
  const m1Col = m1[0].length;
  const m2Row = m2.length;
  const m2Col = m2[0].length;

  if (!checkPossibleMatrixMultiple(m1Row, m1Col, m2Row, m2Col)) {
    return -1;
  }

  let result = Array.from(Array(m1Col), () => new Array(m1Row).fill(0));

  for (let i = 0; i < m1Row; i++) {
    for (let j = 0; j < m2Col; j++) {
      for (let k = 0; k < m2Row; k++) {
        result[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return result;
}

console.log(
  matrixMultiple(
    [
      [1, 2],
      [2, 4],
    ],
    [
      [1, 0],
      [0, 3],
    ],
  ),
);
