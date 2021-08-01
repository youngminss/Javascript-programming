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

    return myMap;
  }

  function findCharacter(myMap) {
    for (let i = 0; i < myMap.length; i++) {
      if (myMap[i].indexOf(1) !== -1) {
        return [i, myMap[i].indexOf(1)];
      }
    }
  }

  function move(myMap, moveInfo) {
    let x = [-1, 1, 0, 0];
    let y = [0, 0, -1, 1];
    const row = myMap.length;
    const col = myMap[0].length;

    let [characterX, characterY] = findCharacter(myMap);
    myMap[characterX][characterY] = 0;

    for (let info of moveInfo) {
      let nx = characterX + x[info - 1];
      let ny = characterY + y[info - 1];

      if (0 <= nx && nx < row && 0 <= ny && ny < col && myMap[nx][ny] === 0) {
        characterX = nx;
        characterY = ny;
      }
    }

    myMap[characterX][characterY] = 1;
    return myMap;
  }

  let myMap = make_map(
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

  console.log(move(myMap, [2, 2, 2, 4, 4, 4]));
}
