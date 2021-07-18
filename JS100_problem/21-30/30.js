/**
 * Array.prototype.indexOf()
 * String.prototype.indexOf()
 * = string 도 같은 iterable 오브젝트
 */
{
  function findSubStringIdx(main, sub) {
    return main.indexOf(sub);
  }
  console.log(findSubStringIdx("pineapple is yummy", "apple"));
}
