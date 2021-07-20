/**
 * ★ String.prototype.padStart(2, '0') 으로 깔끔하게, 시간 빈틈에 0삽입하기
 */
{
  function calcTime(busTime, curTime) {
    let busTimeSecond = parseInt(busTime.split(":")[0], 10) * 3600 + parseInt(busTime.split(":")[1], 10) * 60;
    let curTimeSecond = parseInt(curTime.split(":")[0], 10) * 3600 + parseInt(curTime.split(":")[1], 10) * 60;

    let restTimeSecond = busTimeSecond - curTimeSecond;
    if (restTimeSecond < 0) {
      return "지나갔습니다.";
    }
    return `${String(parseInt(restTimeSecond / 3600, 10)).padStart(2, "0")}시간 ${String(parseInt((restTimeSecond % 3600) / 60, 10)).padStart(
      2,
      "0",
    )}분`;
  }
  function restBusTime(busTimes, curTime) {
    let result = [];
    for (let busTime of busTimes) {
      result.push(calcTime(busTime, curTime));
    }
    return result;
  }
  console.log(restBusTime(["12:30", "13:20", "14:13"], "12:40"));
}
