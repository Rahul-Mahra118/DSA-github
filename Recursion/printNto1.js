function printNto1(n){
    if(n==0) return 1;
    console.log(n);
    return printNto1(n-1);
}
printNto1(5)