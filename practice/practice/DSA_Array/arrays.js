// 1.replace 3 multiple by fizz , 5 multiple by bizz, 5and7 multiple by fizzbizz
//  function replaceChar(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%3==0 && arr[i]%5==0){
//             console.log("fizzbizz")
//         }
//          else if (arr[i] % 3 == 0) {
//             console.log("fizz")
//         } else if (arr[i] % 5 == 0 && arr[i] % 7 != 0) {
//             console.log("bizz")

//     }
// }
//     return arr;
//     }
// console.log(replaceChar([11,6,4,10,2,15,91]))





// // //2.find the two pairs sum which is equal to target
function check(arr, target) {
    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] + arr[j] == target) {
            return true;
        } else if (arr[i] + arr[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}
 console.log(check([1, -2, 3, 8, 7], 1))




// //3.flat the array [1,2,3,[4,5,6,[7,8,[9]]]] => [1,2,3,4,5,6,7,8,9] using recursion
// function flat(array) {
//     let res = [];
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i]) == false) {  //checking array if not array taking that value and push into empty array
//             res.push(array[i]);
//         } else {
//             res = res.concat(flat(array[i])) //recursion
//         }
//     }
//     return res;
// }
// // console.log(flat([1, 2, 3, [4, 5, 6, [7, 8, [9]]]]))





// //4.find the hidden number 
// function hidden(s) {
//     let left = 0;
//     let right = s.length - 1;
//     mid = (left + right) / 2

//     let results = [];

//     for (let i = 0; i < s.length; i++) {
//         substract = s[i] - s[mid];
//         results.push(substract)
//     }

//     let val = 0;
//     let sumOfArray = results.reduce((x, y) => x + y, val)
//     if (sumOfArray == 0) {
//         return s[mid];
//     } else {
//         return -1
//     }

// }
// // console.log(hidden([1, 2, 3]))





// // 5.find the maximum word in the sentence 
// function countSpace(words) {
//     let count = 0;
//     for (let i = 0; i < words.length; i++) {
//         let currCount = words[i].split(" ").length
//         if (currCount > count) {
//             count = currCount
//         }
//     }
//     return count;
// }
// console.log(countSpace(['im from belagavi', "im an backend developer searching for job"]))




// function replaceword(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%3==0){
//             return "fizz"
//         }
//     }  if(arr[i]%5==0 && arr[i]%7!=0){
//         return "bizz"

//     }
//     if(arr[i]%5==0 && arr[i]%7==0){
//         return "ritesh"
//     }
//     return arr;

// }
// console.log(replaceword([1,2,3,4,5,6,7]))