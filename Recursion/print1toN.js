// In this using recursion we will try to print element from 1 to n;
let n=6;

function print(n){
    if(n==0) return 1;
    console.log(n)
    print(n-1);
}

print(n)