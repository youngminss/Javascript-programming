{
  /**
   * Array.prototype.splice() π‘
   * - λ°°μ΄ μμμ μΆκ°,μ­μ ,κ΅μ²΄ λͺ¨λ κ°λ₯
   * - μ­μ λ μμλ‘ μ΄λ€μ§ λ°°μ΄μ λ°λ‘ λ°νν΄μ€λ€.
   * - μμ μΈλ±μ±λ κ°λ₯ν¨
   *
   * [κΈ°λ³Έ λ¬Έλ²]
   * arr.splice(index[, deleteCount, elem1, ..., elemN])
   */
  let arr = ["I", "Love", "Me"];
  console.log(arr); // [ 'I', 'Love', 'Me' ]
  let removeData = arr.splice(2, 1, "You");
  console.log(removeData); // [ 'Me' ]
  console.log(arr); // [ 'I', 'Love', 'You' ]
  console.clear();

  /**
   * Array.prototype.slice() π‘
   * - μμμΈλ±μ€ ~ λμΈλ±μ€-1 κΉμ§μ μλ³Έ λ°°μ΄μ λ³΅μ¬ν μλ‘μ΄ λ°°μ΄μ λ°ν
   * - μ­μ, μμ μΈλ±μ± κ°λ₯(μ΄ λλ μμ μΈλ±μ€ ~ λκΉμ§)
   * - λ¬Έμμ΄ λ©μλμΈ String.prototype.slice() μ μ μ¬νκ² λμ
   * - μλΈ λ¬Έμμ΄(substring) λμ , μλΈ λ°°μ΄(subarray)μ λ°ννλ€λ μ μ΄ λ€λ¦
   * - arr.slice() μ²λΌ, μΈμλ₯Ό νλλ λκΈ°μ§ μκΈ°λ ν¨ ( λ§μ΄ μ¬μ© ) π
   * - μ΄ λ°©μμ, "μλ‘μ΄ λ°°μ΄"μ μμ±νλ λ°©λ² μ€μ νλ μ΄λ―λ‘ μμ£Ό μ¬μ©
   *
   * [κΈ°λ³Έ λ¬Έλ²]
   * arr.slice([start], [end])
   */
  let arr2 = ["1", "2", "3", "4"];
  console.log(arr2.slice(1, 3)); // [ '2', '3' ]
  console.log(arr2.slice(-2)); // [ '3', '4' ]
  console.clear();

  /**
   * Array.prototype.concat() π‘
   * - κΈ°μ‘΄ λ°°μ΄μ μμλ₯Ό μ¬μ©ν΄, "μλ‘μ΄ λ°°μ΄"μ λ§λ€κ±°λ, κΈ°μ‘΄ λ°°μ΄μ μμλ₯Ό μΆκ°νκ³ μ ν  λ μ¬μ©
   *
   * [κΈ°λ³Έ λ¬Έλ²]
   * - arr.concat(arg1, arg2...)
   * - μΈμμλ "λ°°μ΄"μ΄λ "κ°"μ΄ μ¬ μ μλ€. κ°―μ μ νμ μλ€.
   * - μΈμλ‘ "κ°μ²΄"κ° λμ΄μ€λ©΄(μ μ¬ λ°°μ΄κ°μ²΄λΌλ), κ°μ²΄λ "λΆν΄ λμ§ μκ³  ν΅μΌλ‘ λ³΅μ¬"λμ΄ λν΄μ§ π
   * - κ·Έλ°λ°, μ μ¬ λ°°μ΄ κ°μ²΄μ "νΉμν νλ‘νΌν°", "Symbol.isConcatSpreadable" μ΄ μ‘΄μ¬νλ©΄, concat μ μ΄ κ°μ²΄λ₯Ό "λ°°μ΄μ²λΌ μ·¨κΈ"
   * - λ°λΌμ, κ°μ²΄ νλ‘νΌν°μ κ°μ΄ λν΄μ§λ€.
   *
   * [μ°Έκ³ ]
   * SymbolConstructor.isConcatSpreadable: typeof Symbol.isConcatSpreadable
   * - A Boolean value that if true indicates that an object should flatten to its array elements by Array.prototype.concat.
   */
  let arr3 = [1, 2];
  let arrayLike = {
    0: "something",
    length: 1,
  };
  console.log(arr3.concat(arrayLike)); // [ 1, 2, { '0': 'something', length: 1 } ]

  let arr4 = [1, 2];
  let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };
  console.log(arr4.concat(arrayLike2)); // [ 1, 2, 'something', 'else' ]
  console.clear();

  /**
   * forEach λ‘ λ°λ³΅μμ νκΈ°
   * - μ£Όμ΄μ§ ν¨μλ₯Ό, λ°°μ΄ μμ κ°κ°μ λν΄ μ€νν  μ μκ² ν΄μ€λ€.
   */
  [1, 2, 3, 4, 5].forEach((el, idx) => {
    console.log(el, idx);
  });
  // 1 0
  // 2 1
  // 3 2
  // 4 3
  // 5 4
  console.clear();
}
