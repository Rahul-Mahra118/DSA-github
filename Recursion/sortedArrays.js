function checkSorted(arr,start){
    if(start==arr.length-1) return true;
    if(arr[start]>arr[start+1]) return false;
    checkSorted(arr, start+1)
}

let res= checkSorted([1,2,3,4],0);
console.log(res)