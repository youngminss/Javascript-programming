{
  /**
   * 기본적인 Object type 은 Iterable 이 아니다.
   * 그래서, for-of 문을 지원하지 않는다.
   */
  // let range = {
  //   from: 1,
  //   to: 5,
  // };

  // for (let num of range) {
  //   console.log(num);
  // }
  // TypeError: range is not iterable

  /**
   * String Object 도 default Iterable 객체 중 하나이다.
   * 고로, for ~ of 문 같은 기능을 지원한다.
   */
  const myStr = "hi";
  console.log(myStr[Symbol.iterator]); // [Function: [Symbol.iterator]]

  for (let chr of myStr) {
    console.log(chr);
  }
  // h
  // i
  console.clear();

  /**
   * 일반 객체 -> 이터러블로 변환
   */
  let range = {
    from: 1,
    to: 5,

    // Symbol.iterator 프로퍼티 존재
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    // next 메소드 프로퍼티 존재
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };

  // 객체 -> 이터러블 변환 후, 이터러블 기능 중 for - of 문 사용가능
  for (let num of range) {
    console.log(num);
  }
  // 1
  // 2
  // 3
  // 4
  // 5
  console.clear();

  /**
   * "generator" 로 생성한 iterable 테스트
   */
  let strIterator = "hello"[Symbol.iterator]();
  while (true) {
    let result = strIterator.next();
    if (result.done) break;
    console.log(result.value);
  }
  // h
  // e
  // l
  // l
  // o
  console.clear();

  /**
   * Generator 예제
   * [형식]
   * - function* GenName() {}
   */
  function* numberGen() {
    yield 1;
    yield 2;
    yield 3;
  }

  let myNumberGen = numberGen();
  console.log(myNumberGen); // Object [Generator] {}

  for (let n of myNumberGen) {
    console.log(n);
  }
  // 1
  // 2
  // 3

  function* numberGen1() {
    yield 1;
    yield 2;
  }
  function* numberAndStrGen() {
    yield* numberGen1();
    yield "a";
    yield "b";
  }

  let myGen = numberAndStrGen();
  console.log(myGen); // Object [Generator] {}

  for (let value of myGen) {
    console.log(value);
  }
  // 1
  // 2
  // a
  // b
  console.clear();

  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  const iter = gen();

  console.log(iter.next()); // { value: 1, done: false }
  console.log(iter.next()); // { value: 2, done: false }
  console.log(iter.next()); // { value: 3, done: false }
  console.log(iter.next()); // { value: undefined, done: true }
  console.clear();

  function* gen1() {
    yield 1;
    return 2; // generator 함수는 여기서 종료
    yield 3;
  }

  const iter1 = gen1();

  iter1.next(); // { value: 1, done: false }
  iter1.next(); // { value: 2, done: true }
  iter1.next(); // { value: undefined, done: true }

  for (let v of gen1()) {
    console.log(v);
  }
  // 1
  console.clear();

  function* gen2() {
    const received = yield 1;
    console.log(received);
  }

  const iter2 = gen2();
  console.log(iter2.next()); // { value: 1, done: false }

  console.log(iter2.next("hello"));
  // hello << 내부 generator 에서의 console 출력
  // { value: undefined, done: true }	<< 기존에 실질적인 iterator 객체순회는 끝났었으므로, undefined
  console.clear();

  /**
   * Array.from(Iterable 또는 Array-like)
   */
  function* myGenerator1() {
    yield 1;
    yield 2;
  }
  let myGeneratorInst = myGenerator1();
  let myArrayLike = {
    0: "a",
    1: "b",
    length: 2,
  };

  // myGeneratorInst.push(1); // TypeError: myGeneratorInst.push is not a function
  // myArrayLike.push("c"); // TypeError: myArrayLike.push is not a function

  let arrFromMyGeneratorInst = Array.from(myGeneratorInst);
  let arrFromMyArrayLike = Array.from(myArrayLike);

  arrFromMyGeneratorInst.push(3); // 성공
  arrFromMyArrayLike.push("c"); // 성공

  console.log(arrFromMyGeneratorInst); // [ 1, 2, 3 ]
  console.log(arrFromMyArrayLike); // [ 'a', 'b', 'c' ]
}
