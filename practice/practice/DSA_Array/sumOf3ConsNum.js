function sumOf3ConNum(arr, k) {
    if (arr.length < k) {
        return;
    }
    let currSum = -Infinity
    for (let i = 0; i < arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < k + i; j++) {
            sum += arr[j]
        }
        // if (arr[i] + arr[i + 1] + arr[i + 2] > currSum) {
        //     currSum = arr[i] + arr[i + 1] + arr[i + 2]
        // }
        if (sum > currSum) {
            currSum = sum;
        }
    }
    return currSum;
}
// console.log(sumOf3ConNum([11, 1, 7, 11, 1, 2.2, 3, 3, 3, 48, -100, 4, 48],4))