// 1.reverse array without new array 
function reverse(arr) {
    let i = 0, j = arr.length - 1;

    while (i < j) {

        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]

        i++;
        j--;
    }
    return arr;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(reverse(arr))



//2.rotate the array elements by d number
function rotateArray(array, d) {
    //  we have to rotate array by 3 times 
    let i = 0;
    let j = array.length - 1;

    while (i < j) {
        array[i] = array[i] + array[j]
        array[j] = array[i] - array[j]
        array[i] = array[i] - array[j]

        i++;
        j--;
    }


    let m = 0;
    let n = d - 1;
    while (m < n) {
        array[m] = array[m] + array[n]
        array[n] = array[m] - array[n]
        array[m] = array[m] - array[n]

        m++;
        n--;
    }

    let a = d;
    let b = array.length - 1;
    while (a < b) {
        array[a] = array[a] + array[b]
        array[b] = array[a] - array[b]
        array[a] = array[a] - array[b]

        a++;
        b--;
    }

    return array;
}
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// [9,8,7,6,5,4,3,2,1]
// [8,9,7,6,5,4,3,2,1]
// [8,9,1,2,3,4,5,6,7]
const d = 2
// console.log(rotateArray(array, d))





function sq(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        var x = Math.sqrt(s[i])
    }
    for(let j=0;j<s.length;j++){
        if(x === s[j]){
            sum += (x*x)
        }
    }
    
    return sum;
}
// console.log(sq([1,2,3,4,6,9,10]))



// find count of the pairs whose sum is equal to k
function sum(a, k) {
    let i = 0;
    let j = a.length - 1
    let count = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] + a[i+1] == k){
            count++
        }
    }
    return count;
}

// console.log(sum([1, 5, 7, -1, 5], 6))