// ===== 재귀 함수 형태 =====
// var book = {
//   member: { name: 100 },
//   point: { value: 200 },
// };
// function show(param) {
//   for (var type in param) {
//     typeof param[type] === "object" ? show(param[type]) : console.log(`${type} : ${param[type]}`);
//   }
// }
// show(book);
// name: 100
// value: 200

// ===== 정리 시간 =====
var member = {
  Jan: { item: { title: "JS북", amount: 100 }, point: [10, 20, 30] },
  Feb: { item: { title: "JS북", amount: 200 }, point: [40, 50, 60] },
};

var totalPoint = 0;

function pointHandler(param, totalPoint) {
  console.log(param);
  param.forEach((point) => {
    totalPoint += point;
  });
  return totalPoint;
}

function show(param) {
  for (var type in param) {
    typeof param[type] === "object"
      ? Array.isArray(param[type])
        ? (totalPoint = pointHandler(param[type], totalPoint))
        : show(param[type])
      : console.log(`${type} : ${param[type]}`);
  }
}
show(member);
console.log(totalPoint);
