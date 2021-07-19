{
  function isConsecutiveNumber(arr) {
    let flag = "YES";
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        flag = "NO";
        break;
      }
    }
    return flag;
  }
  console.log(isConsecutiveNumber([1, 2, 3, 4, 5]));
  console.log(isConsecutiveNumber([1, 4, 2, 6, 3]));
}
