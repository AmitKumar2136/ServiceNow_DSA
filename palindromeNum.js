var input = 121;

function isPalindrome(num) {
  if(!num) return false;
  var reverseNum = num.toString().split('').reverse().join('');
  return num === Number(reverseNum);
   
}

const output = isPalindrome(input);
console.log(output);