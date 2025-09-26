function fib(n){
    if(n==0 || n==1) return n;
    let res= fib(n-1)+fib(n-2);
    return res;
}
console.log(fib(5))