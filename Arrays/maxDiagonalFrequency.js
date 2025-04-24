// In this we will try to find the primary and secondary diagonal 
//find max value lies in which diagonal 
//after finding max ( calculate its frequency)

/**
  steps--->>>
  1. find the primary and secondary diagonal
  2. find the max element  of both the diagonal and store their frequency
  3. Print the max element.
 */

let arr= [[1,4],[4,4]]

function findMaxDiagonalFrequencyElement(arr){
    //let find the primary diagonal Element , seconday diagonal
   let primaryDiagonal=[];
   let secondaryDiagonal=[]
   let n= arr.length
    for(let i=0;i<arr.length;i++){
        primaryDiagonal.push(arr[i][i]);
        secondaryDiagonal.push(arr[i][n-i-1]);

    }
    let max=-Infinity;
    let fullArray=[...primaryDiagonal,...secondaryDiagonal]
    max= Math.max(max,...fullArray)
    console.log(max)
    let pfreq=0
    let dfreq=0
    for(let i=0;i<arr.length;i++){
        if(max==arr[i][i]) pfreq++;
        if(max==arr[i][n-i-1]) dfreq++;
    }
    console.log(max, Math.max(pfreq,dfreq))
}

findMaxDiagonalFrequencyElement(arr)
