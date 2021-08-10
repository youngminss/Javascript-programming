{
  /**
   * Array 를 typeof 로 확인하면, 그냥 object 타입에 속한다.
   * 그렇기 때문에, 제대로, 배열인지 확인하려면
   * - Array.isArray(arr) 가 필요 💡
   */

  console.log(typeof {}); // object
  console.log(typeof []); // object

  console.log(Array.isArray({})); // false
  console.log(Array.isArray([])); // true

  /**
   * 함수르 호출하는 대부분의 배열 메소드(find, filter, map 등)는 thisArg 라는 매개변수를 옵션으로 받을 수 있다.
   *
   *
   * arr.find(func, thisArg);
   * arr.filter(func, thisArg);
   * arr.map(func, thisArg);
   * // thisArg는 선택적으로 사용할 수 있는 마지막 인수입니다.
   *
   * thisArg : function 의 this 가 된다.
   */
  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    },
  };

  let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

  // army.canJoin 호출 시 참을 반환해주는 user를 찾음
  // army 라는 thisArg 를 넘기지 않고, army.canJoin 사용시, 에러 발생
  let soldiers = users.filter(army.canJoin, army);

  console.log(soldiers.length); // 2
  console.log(soldiers[0].age); // 20
  console.log(soldiers[1].age); // 23
}
