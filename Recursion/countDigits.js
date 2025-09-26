function countDigits(n){
    if(n==0) return 0;
    
    return 1+countDigits(Math.floor(n/10))
}
let res= countDigits(12);
console.log(res)