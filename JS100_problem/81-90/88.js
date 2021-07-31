{
  function make_map(row, col, characterPositions, obstacles) {
    let myMap = Array.from(new Array(col + 2), () => new Array(row + 2).fill(2));

    for (let i = 1; i <= col; i++) {
      for (let j = 1; j <= row; j++) {
        myMap[i][j] = 0;
      }
    }

    myMap[characterPositions[0] + 1][characterPositions[1] + 1] = 1;
    obstacles.forEach((obstacle) => {
      myMap[obstacle[0] + 1][obstacle[1] + 1] = 2;
    });

    console.log(myMap);
  }

  make_map(
    4,
    5,
    [0, 0],
    [
      [0, 1],
      [1, 1],
      [2, 3],
      [1, 3],
    ],
  );
}
