{
  function changeCase(str) {
    let result = "";
    str.split("").forEach((c) => {
      if (c === c.toUpperCase()) {
        result += c.toLowerCase();
      } else if (c === c.toLowerCase()) {
        result += c.toUpperCase();
      }
    });
    return result;
  }
  console.log(changeCase("AAABBBcccddd"));
}
