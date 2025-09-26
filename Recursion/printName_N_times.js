function printName_N_times(name,n){
    if(n==0) return;
    console.log(name);
   return printName_N_times(name,n-1)
}

printName_N_times('Rahul',5)