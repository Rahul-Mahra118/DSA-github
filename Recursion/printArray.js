let arr=[1,2,3,4,5,6]

function printArray(arr,n){
    if(n<0)return;
    console.log(arr[n])
    printArray(arr,n-1)
}
printArray(arr,5)