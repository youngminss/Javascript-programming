{
  const str = "aaabbbbcdddd";
  let dict = {};

  str.split("").forEach((c) => {
    if (c in dict) {
      dict[c] += 1;
    } else {
      dict[c] = 1;
    }
  });

  let answer = Object.entries(dict)
    .map((data) => data[0] + data[1])
    .join("");
  console.log(answer);
}
