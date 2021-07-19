{
  const route = [];

  function hanoi(num, start, end, temp) {
    // 원판이 하나 남았을 경우, 바로 옮기면 됌
    if (num === 1) {
      route.push([start, end, num]);
      return NaN;
    }

    // 원판이 n-1 개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    // 가장 큰 원판을 목표기둥으로
    route.push([start, end, num]);
    // 경유기둥과 시작기둥을 바꾼다.
    hanoi(num - 1, temp, end, start);
  }

  hanoi(3, "A", "C", "B");
  console.log(route);
  console.log(route.length);
}
