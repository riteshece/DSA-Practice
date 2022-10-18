// 1.binary search 
function binarySort(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = (Math.floor(start + end) / 2)

    while (arr[middle] !== num && start <= end) {
        if (num < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = (Math.floor(start + end) / 2)
    }

    return arr[middle] === num ? middle : -1
}

// console.log(binarySort([55, 59, 63, 65, 84, 90, 98], 65))





// 2.Bubble Sort 
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 2, 7, 4, 9, 3, 1, 6, 8]))
// tc = O(n^2)







// //3.
function Sort(a) {
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                //swap the elements
                a[j] = a[j] + a[j + 1]
                a[j + 1] = a[j] - a[j + 1]
                a[j] = a[j] - a[j + 1]
            }
        }
    }
    // return a;

    let left = 0;
    let right = a.length - 1
    let mid = (left + right) / 2
    console.log()

    while (mid < right) {
        a[mid] = a[mid] + a[right]
        a[right] = a[mid] - a[right]
        a[mid] = a[mid] - a[right]

        mid++;
        right--;
    }
    return a;
}
// console.log(Sort([5, 2, 7, 4, 9, 3, 1, 6, 8]))






//4.quick sort
function quickSort(array1) {

}
// console.log(quickSort([5, 2, 7, 4, 9, 3, 1, 6, 8]))




//5.insertion sort
function insertionSort(array) {
   for(let right=1;right<array.length;right++){
       let curr = right
       while(curr >= 1 && array[curr-1] > array[curr]){
           [array[curr-1],array[curr]] = [array[curr],array[curr-1]]
           curr--;
       }
   }
   return array;
}
// console.log(insertionSort([2, 6, 5, 8, 9, 3, 7]))

