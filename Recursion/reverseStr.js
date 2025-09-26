function reverseStr(str, start){
    if(start== str.length) return ' ';

    return reverseStr(str, start+1)+ str[start]
}

let res= reverseStr('abcd',0);
console.log(res)