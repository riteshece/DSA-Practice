function findMissingNumber(arr){
    let max=Math.max(...arr)
        arraysum=0;
        for(let i=0;i<arr.length;i++){
            arraysum+=arr[i]
        }
        let missingNum=(max*(max+1)/2)-arraysum
        return missingNum
    }
    console.log(findMissingNumber([1,3,4,5,6,7,8,9]))
