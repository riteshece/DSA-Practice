//let arr=[3,41,7,9,4,6,2]
//console.log("second largest element in the array ",arr.sort().reverse()[arr.length-2])

//
let arr=[3,41,7,9,4,6,2].sort()
let n=arr.length;
let largest=-Infinity;
let secondL=-Infinity;
for(let i=0;i<n;i++){
    if(arr[i]>largest){
        secondL=largest
        largest=arr[i];
    }
}
console.log(largest,secondL)


