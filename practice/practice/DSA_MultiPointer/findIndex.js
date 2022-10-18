function findIndexOfPair(arr) {
    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] + arr[j] == 0) {
            return (arr[i, j])
        } else if (arr[i] + arr[j] > 0) {
            j--;
        } else if (arr[i] + arr[j] < 0) {
            i++;
        }
    }

}
// console.log(findIndexOfPair([-5, -3, -2, 1, 5, 7]))





// find the pairs that sums of number is closet to 12

function closetTo12(array, sum) {
    let i = 0;
    let j = array.length - 1;
    let isPresent = false;

    while (i < j) {
        if (array[i] + array[j] == sum) {
            return isPresent = true;
        } else if (array[i] + array[j] > sum) {
            j--;
        } else {
            i++;
        }
    }
    return isPresent;
}

// console.log(closetTo12([1, 5, 9, 7, 3, 4, 2, 6], 12))






//convert string to integer
function conStr() {
    let int = str * 1;
    console.log(typeof (int), int)
}
const str = "12345"
// conStr(str)






//sum of given number digit
function sumOfDigit(){
    if(n<1){
        return
        n
    }
    return (sumOfDigit(n)(n+1))
    
}
console.log