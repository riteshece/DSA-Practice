//1.from sorted array
function findMissingNumber(arr) {
    let max = Math.max(...arr)
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }
    let missingNum = (max * (max + 1) / 2) - arraySum
    return missingNum;

}

 console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9]))



// function missingNum(arr = []) {
//     let min = Math.min(...arr)
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] - min + 1
//     }

//     let minssingNumberIn = findMissingNumber(arr)

//     return minssingNumberIn + min - 1;
// }

// console.log(missingNum([8, 10, 12, 13, 14, 15, 9]))
