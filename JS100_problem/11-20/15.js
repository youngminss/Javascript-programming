/*
 * es6부터는 backtick 문자열(``) 안에서 $와 중괄호로 표현식을 사용할 수 있습니다.
 * 이를 템플릿 리터럴(Template literals)이라 합니다.
 */
{
  function introduce(name) {
    console.log(`안녕하세요. 저는 ${name}입니다.`);
  }
  introduce("위영민");
}
