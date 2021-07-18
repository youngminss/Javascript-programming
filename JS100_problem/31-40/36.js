{
  function gugu(number) {
    let result = "";
    for (let i = 1; i <= 9; i++) {
      result += `${String(2 * i)} `;
    }
    return result;
  }
  console.log(gugu(2));
}
