{
  function isUpperCase(char) {
    return char >= "A" && char <= "Z" ? "YES" : "NO";
  }
  console.log(isUpperCase("A"));
  console.log(isUpperCase("N"));
  console.log(isUpperCase("Z"));
  console.log(isUpperCase("a"));
  console.log(isUpperCase("n"));
  console.log(isUpperCase("z"));
  console.log(isUpperCase("="));
  console.log(isUpperCase("."));

  // YES;
  // YES;
  // YES;
  // NO;
  // NO;
  // NO;
  // NO;
  // NO;

  // 다른 답안
  // if (data === data.toUpperCase()) {
  //   console.log("YES");
  // } else {
  //   console.log("NO");
  // }
}
