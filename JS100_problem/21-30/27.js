/**
 * 오브젝트 만들기
 * - 빈 오브젝트 만들고
 * - keys, values 반복하면서, 대입하기
 */
{
  function makeTwoStudent(name1, name2, score1, score2) {
    let obj = {};
    obj[name1] = score1;
    obj[name2] = score2;
    return obj;
  }
  console.log(makeTwoStudent("Yujin", "Hyewon", 70, 100));
}
