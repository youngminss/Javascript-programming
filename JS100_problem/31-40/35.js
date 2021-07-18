/**
 * Factory 함수
 * - 함수가 "객체"를 반환할 때 팩토리 함수라고 한다.
 * - 함수 안에, 함수
 */
{
  function one(n) {
    function two(value) {
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
  }

  const a = one(2);
  const b = one(3);
  const c = one(4);

  console.log(a(10));
  console.log(b(10));
  console.log(c(10));
}
