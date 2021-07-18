{
  function makeDecimalToBinary(Decimal) {
    let binary = "";
    while (Decimal) {
      binary += String(Decimal % 2);
      Decimal = parseInt(Decimal / 2);
    }
    return binary.split("").reverse().join("");
  }
  console.log(makeDecimalToBinary(255));
}
