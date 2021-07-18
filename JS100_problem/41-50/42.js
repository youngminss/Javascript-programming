{
  const monthToDays = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const days = {
    0: "WED",
    1: "THU",
    2: "FRI",
    3: "SAT",
    4: "SUN",
    5: "MON",
    6: "TUE",
  };
  function findDayOfTheWeek(month, day) {
    let totalDay = 0;
    for (let i = 1; i < month; i++) {
      totalDay += monthToDays[i];
    }
    totalDay += day;
    const restDay = (totalDay % 7) - 1; // 날짜는 1~ 부터니깐 처음 1월1일 뺀다
    return days[restDay];
  }
  console.log(findDayOfTheWeek(12, 30));

  // Date 오브젝트 응용 (답지)
  // function solution(a, b) {
  //   const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  //   const x = new Date("2020-" + a + "-" + b);
  //   return day[x.getDay()];
  // }
  // console.log(solution(month, date));
}
