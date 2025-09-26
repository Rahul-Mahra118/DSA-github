function reverseString(str,len,start){
    if(start==len) return '';
    return reverseString(str,len,start+1) +str[start]
}

console.log(reverseString('Rahul',5,0))