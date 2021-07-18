{
  function checkSorted(heights) {
    for (let i = 0; i < heights.length - 1; i++) {
      if (heights[i] > heights[i + 1]) {
        return "NO";
      }
    }
    return "YES";
  }
  console.log(checkSorted([176, 156, 155, 165, 166, 169]));
  console.log(checkSorted([155, 156, 165, 166, 169, 176]));
}
