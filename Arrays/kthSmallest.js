//In this we will try to find the Kth smallest Element in an array.

let arr=[2,3,5,6,7,8,9,1,2,3];
let k=4;

//sort using selection sort
for(let i=0;i<arr.length;i++){
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIndex]>=arr[j]){
            minIndex=j;
        }
    }
    console.log(minIndex)
    //swap
    let temp=arr[minIndex];
    arr[minIndex]= arr[i];
    arr[i]= temp;
}
console.log(arr);
let count=0;

for(let i=0;i<arr.length-1;i++){
    if(count===k-1){ //check whther count & (k-1 ) both index value is same or not .
        console.log(arr[i])
        break;
    }
    // adjacent element check 
    if(arr[i]!=arr[i+1]){
        count++; //increase the count .
    }
}