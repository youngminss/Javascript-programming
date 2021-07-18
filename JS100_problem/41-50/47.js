/**
 * Set() 자료형
 * - set.size 프로퍼티 => set 자료형 내부에 데이터 수 반환
 */
{
  let people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903",
  };
  let set = new Set();
  people = Object.entries(people);
  people.forEach((info) => {
    set.add(info[1]);
  });
  console.log(set.size);

  // 오브젝트 그대로 사용하기

  // for (let key in people) {
  //   result.add(people[key]);
  // }
}
