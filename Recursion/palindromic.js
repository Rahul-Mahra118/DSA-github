function isPalindrome(str, start, end){
    if(start>=end) return true;
    if(str[start]!==str[end]) return false;
    return isPalindrome(str, start+1, end-1);
}

let res= isPalindrome('', 0, 6);
console.log(res)