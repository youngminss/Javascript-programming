// Array.prototype.concat()
// Array.prototype.join()
{
  let year = "2019";
  let month = "04";
  let day = "26";
  let hour = "11";
  let minute = "34";
  let second = "27";

  let today = [year, month, day].concat().join("/") + " " + [hour, minute, second].join(":");
  // let answer = year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second);
  console.log(today);
}
