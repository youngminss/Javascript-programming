/**
 * JS 2차원 배열 생성법
 * - 방법 1. row 크기만큼 1차원 배열 생성후, 반복문으로 새로운 배열정보를 하나씩 push 하거나 대입
 * - 방법 2. ★ ES6+ 문법, Array.from(새로운 배열, mapfn)
 * [참고](https://gent.tistory.com/296)
 */
{
  function minesweeper(flagMap) {
    // flagMap 크기와 같은 mineMap 초기화 (모두 0으로)
    const row = flagMap.length;
    const col = flagMap[0].length;
    let mineMap = Array.from(new Array(row), () => new Array(col).fill(0));

    const x = [-1, 1, 0, 0];
    const y = [0, 0, -1, 1];

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (flagMap[i][j] === 1) {
          mineMap[i][j] = "f";

          for (let k = 0; k < 4; k++) {
            let nx = i + x[k];
            let ny = j + y[k];

            if (0 <= nx && nx <= row && 0 <= ny && ny <= col && mineMap[nx][ny] === 0) {
              mineMap[nx][ny] = "*";
            }
          }
        }
      }
    }

    return mineMap;
  }
  const mineMap = minesweeper([
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  mineMap.forEach((oneline) => {
    console.log(oneline.join(" "));
  });
}
