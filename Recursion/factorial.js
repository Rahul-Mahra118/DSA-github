function findFact(n){
    if(n==0) return 1;
    return n*findFact(n-1)
}
let res=findFact(10);
console.log(res)