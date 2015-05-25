var n1 = "one,two,three,four,five,six,seven,eight,nine".split(",");
var n2 = "ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen".split(",");
var n3 = "twenty,thirty,fourty,fifty".split(",");

function toWord(n) {
  var strN = n + "";
  if (strN.length == 1)
    strN = "0" + strN;
  else if (strN.length != 2)
    return "";

  if (strN.charAt(0) == 0)
    return n1[strN.charAt(1) -1];
  if (strN.charAt(0) == 1)
    return n2[n-10];
  return n3[strN.charAt(0) -2] + " " + n1[strN.charAt(1) -1];
}

function getTime(time) {
  var word = "";
  var parts = time.split(":");
  var hours = parseInt(parts[0]);
  var mins = parseInt(parts[1]);

  if (mins > 30)
    hours++;

  if (hours == 13)
    hours = 1;

  if (parts[1] == 0)
    return toWord2(hours) + " o' clock";
  if (mins == 15)
    return "quarter past " + toWord2(hours);
  if (mins == 30)
    return "half past " + toWord2(hours);
  if (mins == 45)
    return "quarter to " + toWord2(hours);
  if (mins < 30)
    return toWord2(mins) + " past " + toWord2(hours);
  if (mins > 30)
    return toWord2(60 - mins) + " to " + toWord2(hours);
}

var tests = "3:00,3:02,3:14,3:29,3:30,3:45,3:33,3:47,12:00".split(",");
for (var i = 0; i < tests.length; i++)
  console.log(">>> '" + tests[i] + "' = " + getTime(tests[i]));
