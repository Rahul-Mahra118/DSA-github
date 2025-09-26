function findPower(a,b){
    if(b==0) return 1;
    return a* findPower(a,b-1)
}

let res= findPower(2,5);
console.log(res)