var input = "madam";

function isPalindrome(str){
    const revStr = str.split('').reverse().join('');
    return str === revStr;

}

const output = isPalindrome(input);

console.log(output);