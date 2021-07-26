// - 투 포인터, String.prototype.includes(substring) 로 해결
{
  function longestCommonSubsequence(A, B) {
    let result = 0;

    let longestSubsequence = "";
    const shortestLength = A.length > B.length ? B.length : A.length;
    const shortestString = A.length > B.length ? B : A;
    const longestString = A.length > B.length ? A : B;

    let p1 = 0;
    let p2 = 0;

    while (p2 < shortestLength) {
      if (longestString.includes(shortestString.slice(p1, p2 + 1))) {
        p2++;
        if (p2 - p1 > result) {
          result = p2 - p1;
          longestSubsequence = shortestString.slice(p1, p2);
        }
      } else {
        if (p1 === p2) {
          p1++;
          p2++;
        } else {
          p1++;
        }
      }
    }

    // console.log(result, longestSubsequence);
    return result;
  }

  console.log(longestCommonSubsequence("UPWJCIRUCAXIIRGL", "SBQNYBSBZDFNEV"));

  // 'THISISSTRINGS', 'THISIS'
  // 'THISISSTRINGS','TATHISISKKQQAEW'
  // 'THISISSTRINGS', 'KIOTHIKESSISKKQQAEW'
  // 'THISISSTRINGS', 'TKHKIKSIS'
  // 'ABRACADABRA', 'ECADADABRBCRDARA'
  // "UPWJCIRUCAXIIRGL", "SBQNYBSBZDFNEV"
}
