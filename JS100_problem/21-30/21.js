/**
 * Set 자료형을 만드는 방법
 * - 데이터 instanceof 인스턴스 => 데이터가 해당 인스턴스인지 확인
 */
{
  // let x = {1,2,3,4,5,6,7};		// X
  // let x = {};		// = 오브젝트, X
  // let x = new Set("javascript");	// O
  // let x = new Set(range(5));		// = range 는 파이썬, X
  let x = new Set(); // O

  console.log(x instanceof Set);
  x.add(1);
  x.add(1);
  x.add(2);
  console.log(x);
  x.delete(2);
  x.delete(2); // 에러가 발생 X
  console.log(x);
}
