{
  function stringNumberSum(strNumber) {
    let collectNumbers = "";
    for (let i = 1; i <= 20; i++) {
      collectNumbers += String(i);
    }
    let result = 0;
    collectNumbers.split("").forEach((number) => {
      result += parseInt(number);
    });
    return result;
  }
  console.log(stringNumberSum(20));
}
