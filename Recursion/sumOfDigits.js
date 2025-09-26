function sumOfdigits(n){
    if(n==0) return 0;
     let rem=n%10;
     n=Math.floor(n/10);
     return rem+sumOfdigits(n);
}

let res = sumOfdigits(1234);
console.log(res)