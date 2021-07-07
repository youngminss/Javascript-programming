function book(bookParam) {
  var point = 100;
  function getPoint(pointParam) {
    point = point + bookParam + pointParam;
    return point;
  }
  return getPoint;
}
var obj = book(200);
console.log(obj(400));
// 700
/**
 * 700이 찍히는 과정을 설명해보자.
 * - book(200) 을 호출하는 순간부터, book Function 오브젝트를 생성하면서, 실행 컨텍스트를 생성하고 엔진 컨트롤이 내부에 진입한다.
 * - 준비단계에서는, LEC, VEC, TBC 를 생성하고 초기화한다.
 * - Scope 를 LEC 에 외부 렉시컬 환경 참조(OLER) 에 설정한다.
`
EC = {
    LEC = {
        ER : {
            DER : {
                bookParam : 200; 
            },
            OER : {}
        },
        OLER : { [[scope]]}
    },
    VEC = {},
    TBC = {}
}
`
 * - 초기화 단계에서는 bookParam, point, getPoint Function 오브젝트를 생성하고, 선언적 환경 레코드(DER)에 초기화한다.
 * - 실행 단계에서는, 선언적 환경 레코드에 bookParam 200, point 를 100으로, 설정하고, getPoint Function 오브젝트를 생성하고, 실행 컨텍스트가 생성되고, 엔진이 내부로 진입한다.
 * - 스코프를 [[ Scope ]] 에 바인딩한다.
`
EC = {
    LEC = {
        ER : {
            DER : {},
            OER : {}
        },
        OLER : { 
            point : 100;
            bookParam : 200;
        }
    },
    VEC = {},
    TBC = {}
}
`
 * - getPoint Function 오브젝트를 반환, obj 에 할당
 * - obj(400) 이 호출되는 시점부터 클로저 논리전개
 * - getPoint 오브젝트의 [[scope]]를 외부 렉시컬 환경 참조에 바인딩
 * - pointParam : 400 을 선언적 환경 레코드에 설정
`
EC = {
    LEC = {
        ER : {
            DER : {
                pointParam : 400
            },
            OER : {}
        },
        OLER : { 
            point : 100;
            bookParam : 200;
        }
    },
    VEC = {},
    TBC = {}
}`
 * 함수 안에 코드 실행
 * point 와 bookParam 을 DER에서 찾으나 없다 => OLER 에서 존재하는 point, bookParam 을 참조한다 (100, 200)
 * pointParam 은 DER 에 존재하는 것을 참조한다.
 * 결과인 700을 OLER 에 있는 point 에 할당한다.
`
EC = {
    LEC = {
        ER : {
            DER : {
                pointParam : 400
            },
            OER : {}
        },
        OLER : { 
            point : 700;
            bookParam : 200;
        }
    },
    VEC = {},
    TBC = {}
}
`
 * OLER 에 존재하는 point 를 반환한다.
 * point 의 700이 찍힌다.
 */
