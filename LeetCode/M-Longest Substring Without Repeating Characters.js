//2022-04-12 22:23:20

function lengthOfLongestSubstring1(s, prevLength) {
  const arr = s.split("");
  let temp = [];
  let result = prevLength;
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      result = result > temp.length ? result : temp.length;
      return lengthOfLongestSubstring1(arr.slice(arr.indexOf(arr[i]) + 1).join(""), result)
    } else {
      temp.push(arr[i]);
    }
  }
  return result > temp.length ? result : temp.length
}


const test1 = lengthOfLongestSubstring1(
  "pwwkewapw");

console.log("test1 result", test1);


function lengthOfLongestSubstring2(s, prevLength) {
  let temp = [];
  let result = prevLength;
  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
      result = result > temp.length ? result : temp.length;
      return lengthOfLongestSubstring2(s.slice(s.indexOf(s[i]) + 1), result)
    } else {
      temp.push(s[i]);
    }
  }
  return result > temp.length ? result : temp.length
}


const test2 = lengthOfLongestSubstring2("pwwkewapw");

console.log("test2 result", test2);


function lengthOfLongestSubstring3(s) {
  let temp = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const possibleIndex = temp.indexOf(s[i]);
    if (possibleIndex !== -1) {

      temp = temp.slice(possibleIndex + 1)
    }
    temp.push(s[i]);
    result = Math.max(result, temp.length)

  }
  return result
}


const test3 = lengthOfLongestSubstring3("pwwkewapw");

console.log("test3 result", test3);