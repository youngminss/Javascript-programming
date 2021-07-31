/**
 * JS
 * Array.prototype.pop() => 무조건 맨뒤 원소 pop
 * Array.prototype.splice(시작인덱스, 삭제할 갯수, [,추가할 데이터]) => 시작위치부터 삭제가능, 나머지 빈자리 매꾸기까지
 */
{
  function restPalte(plateNumber, k) {
    let plate = new Array(plateNumber).fill().map((n, idx) => idx + 1);

    let i = 0;
    while (plate.length > 2) {
      plate.splice(i, 1);
      i = ((i + k) % plate.length) - 1;
    }

    return plate;
  }

  console.log(restPalte(6, 3));
}
