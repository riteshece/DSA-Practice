// 1.rotate the array elements by d number
function rotate(arr, d) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++;
        j--;
    }

    let k = 0;
    let p = d - 1
    while (k < p) {
        arr[k] = arr[k] + arr[p]
        arr[p] = arr[k] - arr[p]
        arr[k] = arr[k] - arr[p]
        k++;
        p--;
    }

    let m = d;
    let n = arr.length - 1
    while (m < n) {
        arr[m] = arr[m] + arr[n]
        arr[n] = arr[m] - arr[n]
        arr[m] = arr[m] - arr[n]
        m++;
        n--;
    }

    return arr;
}
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// [8,9,1,2,3,4,5,6,7]
// const d = 3
// console.log(rotate(arr, d))

