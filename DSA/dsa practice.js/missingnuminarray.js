function missingnum(arr){
    let max=0;
    let n =arr.length-1
    let sum =n*(n+1)/2
    for(let i=0;i<arr.length;i++){

        max=sum-i;
    }
    return max
}
console.log(missingnum([1,2,4,5]))

