{
  function isPossibleArea(row, col, posX, posY, range) {
    return posX + range <= row && posY + range <= col ? true : false;
  }

  function isNotAroundStone(garden, posX, posY, range) {
    for (let i = posX; i < posX + range; i++) {
      let checkLine = garden[i].slice(posY, posY + range);
      if (checkLine.includes(1)) {
        console.log(i, posX, posY, checkLine);
        return false;
      }
    }
    return true;
  }

  function makeAndPaintMyGaren(garden, x, y, maxRange) {
    for (let i = x; i < x + maxRange; i++) {
      for (let j = y; j < y + maxRange; j++) {
        garden[i][j] = "#";
      }
    }

    garden.forEach((line) => {
      console.log(line.join(" "));
    });
  }

  function showWhereIsMyWideGarden(garden) {
    let maxRange = 0,
      x = 0,
      y = 0;
    const row = garden.length;
    const col = garden[0].length;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (garden[i][j] !== 1) {
          let posX = i;
          let posY = j;
          let range = 0;
          while (isPossibleArea(row, col, posX, posY, range + 1) && isNotAroundStone(garden, posX, posY, range + 1)) {
            range++;
          }

          if (maxRange < range) {
            maxRange = range;
            x = posX;
            y = posY;
          }
        }
      }
    }

    console.log(`${maxRange} X ${maxRange}`);
    makeAndPaintMyGaren(garden, x, y, maxRange);
  }

  const garden = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
  ];
  showWhereIsMyWideGarden(garden);
}

// [
// [0, 0, 0, 0, 0],
// [0, 1, 0, 0, 0],
// [0, 1, 0, 0, 0],
// [0, 0, 1, 0, 0],
// [0, 0, 0, 1, 0]
// ];

// [
// [0, 0, 0, 1, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 1, 0, 0],
// [0, 0, 1, 0, 0],
// [0, 0, 0, 1, 0],
// ];
