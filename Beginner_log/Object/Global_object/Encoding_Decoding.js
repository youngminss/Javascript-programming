// 인코딩, 디코딩
// URI = Uniform Resource Identifier

// 인코딩 (encodeURI(인코딩 할 URI))
var uri = "data?a=번&b=호";
console.log(encodeURI(uri));
// data?a=%EB%B2%88&b=%ED%98%B8
/**
 * 특정 문자를 제외하고는 "%16진수%16진수" 형태로 변환
 * 이것은, ajax 비동기 통신 이전에, "동기통신" 시절에 많이 사용함
 * 실질적인, URI 인코딩, 디코딩 방식은 검색을 해볼 것
 */

// 디코딩 (decodeURI(인코딩 된 URI))
console.log(decodeURI(uri));
// data?a=번&b=호
