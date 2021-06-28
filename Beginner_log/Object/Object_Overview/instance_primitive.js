var obj = new Number(123);
console.log(obj + 200);
console.log(obj.valueOf() + 200);
// 323
// 323
/**
 * Number object 인스턴스인 obj 에는 [[PrimitiveValue]] 에 123이라는 값이 존재
 * obj 라고 사용을 하면, 기본적으로 PrimitiveValue 에 접근을 하겠다고 받아들인다.
 * 그러면, 뒤에 이후에 다른 값과의 연산도 가능
 * Number.valueOf() 또한, 해당 오브젝트 인스턴스의 값에 접근하는 메소드기 때문에 동일한 효과가 발생한다.
 */

obj = obj + 300;
console.log(obj);
console.log(obj.valueOf());
// 423
// 423
/**
 * 그럼 obj 로, 값에 Primitive 값을 연산을 통한 새로운 값으로 업데이트가 가능한가 ?
 * = 가능하다.
 * 연산 업데이트 후, 이전과 동일하게 해당 오브젝트 인스턴스 값에 접근해보면, 업데이트 된 것을 확인가능
 */
