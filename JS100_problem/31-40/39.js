{
  function makeCorrectSentence(wrongSentence) {
    return wrongSentence.replace(/q/gi, "e");
  }
  console.log(makeCorrectSentence("querty"));
  console.log(makeCorrectSentence("hqllo my namq is hyqwon"));

  // replaceAll 사용
  // console.log(replaceAll(word,"q","e"));
}
