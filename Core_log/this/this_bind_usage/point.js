var book = {
  mypoint: 100,
  setEvent: function () {
    var node = document.getElementById("point");
    // this 는 book 오브젝트, book 오브젝트를 function 오브젝트 생성시
    // TargetFunction 에 show 함수를 설정
    // book 은 BoundThis 에 설정
    // node 는 BoundArguments 에 설정 ?
    node.onclick = this.show.bind(book, node);
  },
  show: function (node, event) {
    console.log(node.textContent);
    console.log(this.mypoint);
  },
};
book.setEvent();
// 값 출력
// 100
/**
 * html 열어서, 버튼 눌러보면 이렇게 결과가 나온다.
 * 이벤트 처리에 있어서, bind 는 신의 한수라고 한다 ( 선생님 말씀 )
 * 원래 이벤트리스터 같은 경우에는 내부적으로 this 를 사용할 수 없게 만들었다고 한다.
 * 근데, bind 가 가능해지므로써, 특정 이벤트가 작동했을 때, 바인딩 해놓은 함수를 호출해서 사용할 수 있도록 설정하 수 있게 되었다.
 * 이러한 함수들은, 필요에 따라 해당 이벤트가 발생하는 오브젝트 내부에 따로 설정해놓을 수도 있고
 * 이벤트는 이벤트 끼리, 묶어서 설정할 수 있게 되었다고 한다.
 */
