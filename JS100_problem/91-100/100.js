{
  function getPuzzle(puzzleMap, row, targetLine) {
    for (let i = 0; i < row; i++) {
      if (puzzleMap[i][targetLine] !== 0) {
        const puzzle = puzzleMap[i][targetLine];
        puzzleMap[i][targetLine] = 0;
        return puzzle;
      }
    }
    return -1;
  }
  function puzzleGame(puzzleMap, controllers) {
    const row = puzzleMap.length;
    const col = puzzleMap[0].length;
    let stack = [];
    let score = 0;

    for (let controller of controllers) {
      let puzzle = getPuzzle(puzzleMap, row, controller - 1);
      if (puzzle !== -1) {
        if (stack[stack.length - 1] === puzzle) {
          score += puzzle * 2;
          stack.pop();
        } else {
          stack.push(puzzle);
        }
      } else {
        score--;
      }
    }

    return score;
  }

  const puzzleMap = [
    [0, 0, 0, 0],
    [0, 1, 0, 3],
    [2, 5, 0, 1],
    [2, 4, 4, 1],
    [5, 1, 1, 1],
  ];
  const controller = [1, 1, 1, 1, 3, 3, 3];
  console.log(puzzleGame(puzzleMap, controller));
}
