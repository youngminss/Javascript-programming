/**
 * Object -> Array = Object.entries(obj)
 * iterable -> Array = Array.from(iterable)
 */
{
  const nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };
  let abs = nationWidth["korea"];
  let [nation, width] = [];

  Object.entries(nationWidth).forEach((nationinfo) => {
    console.log(nationinfo);
    if (nationinfo[0] !== "korea") {
      if (Math.abs(nationWidth["korea"] - nationinfo[1]) < abs) {
        abs = Math.abs(nationWidth["korea"] - nationinfo[1]);
        [nation, width] = [nationinfo[0], nationinfo[1]];
      }
    }
  });
  console.log(nation, abs);

  // 제공답안
  // const w = nationWidth["korea"];

  // delete nationWidth["korea"];

  // const entry = Object.entries(nationWidth);
  // const values = Object.values(nationWidth);

  // //gap에 최댓값 저장
  // let gap = Math.max.apply(null, values);
  // let item = [];

  // for (let i in entry) {
  //   if (gap > Math.abs(entry[i][1] - w)) {
  //     gap = Math.abs(entry[i][1] - w);
  //     item = entry[i];
  //   }
  // }

  // console.log(item[0], item[1] - w);
}
