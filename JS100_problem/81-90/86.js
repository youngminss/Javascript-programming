/**
 * Array.prototype.every(function callbackFn(element [,idx]) { ... })
 * 또는 Array.prototype.every((element [,idx]) => { ... })
 */
{
  function rotatingSushi(points, dish) {
    let includeIdxPoints = points.map((el, idx) => {
      const obj = {
        point: el,
        index: idx + 1,
      };
      return obj;
    });

    let answer = 0;
    while (true) {
      let myturn = includeIdxPoints.shift();
      if (includeIdxPoints.every((point) => point.point >= myturn.point)) {
        if (myturn.index === dish) {
          break;
        }
      } else {
        includeIdxPoints.push(myturn);
      }
      answer++;
    }

    return answer;
  }

  console.log(rotatingSushi([1, 1, 3, 2, 5], 3));
}

// [1,1,3,2,5], 3 => 5
// [5,2,3,1,2,5], 1 => 10
