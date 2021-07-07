// ===== 프로퍼티 값 연동현상 (오브젝트) =====
var origin = { member: 100 };
var dup = origin;
dup.member = 200;
console.log(origin.member);
// 200
/**
 * 원래 의도는 origin 오브젝트를 할당한 dup 오브젝트의 member 값만 200으로 바꾸려고 했다.
 * 하지만, origin 에 member 프로퍼티 값 또한 바뀌었다.
 * 이것은, 프로퍼티를 "공유" 하기 때문이다.
 */

// ===== 프로퍼티 값 연동현상 (배열) =====
var origin = [1, 2, 3];
var dup = origin;
dup[1] = 200;
console.log(origin);
// [ 1, 200, 3 ]
/**
 * 배열또한 오브젝트 경우와 마찬가지로, Array 오브젝트 내부적으로
 * Primitive 에 있는 값이 공유되고 있는데, 이것을 수정해버려서 그렇다.
 */

// ===== ★ 연동을 방지하는 법 (프로퍼티 단위로 할당) =====
var origin = { member: 100 };
var dup = {};
for (var name in origin) {
  dup[name] = origin[name];
}
dup.member = 200;
console.log(origin.member);
console.log(dup.member);
// 100
// 200
/**
 * origin 과 dup 오브젝트의 각각의 member 프로퍼티 값이 다르게 할당 된 것을 확인할 수 있다.
 * 즉, origin 에 프로퍼티 값은 바뀌지 않았다. ( 연동이 방지됐다. )
 * 즉, 값의 "공유"를 방지하려면, 프로퍼티 단위로 할당을 해라.
 */
