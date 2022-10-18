//1.find the hightest frequency and return the pairs
// function freq(arr) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (map.get(arr[i]) == undefined) {
//             map.set(arr[i], 1)
//         } else {
//             map.set(arr[i], map.get(arr[i]) + 1)
//         }
//     }

//     let res = [];
//     for (let pairs of map) {
//         if (pairs[1] > 1) {
//             res.push(pairs)
//         }
//     }
//     return res;
// }
// console.log(freq([1,5,6,4,2,3,5,2,48,5,67,5,6,8,1]))






// 2. find the uniqueNums frequency 
function uniqueNums(arr) {
    const set = new Set(arr);  //set method with initiating arr

    return [...set]   //spread operator

}
 console.log(uniqueNums([1,5,6,4,2,3,5,2,48,5,67,5,6,8,1]))




// 3.find the duplicate values
// function duplicate(str1, str2) {
//     let map1 = new Map();
//     let map2 = new Map();

//     for (let i in str1) {
//         if (map1.get(str1[i]) == undefined) {
//             map1.set(str1[i], 1)
//         } else {
//             map1.set(str1[i], map1.get(str1[i]) + 1)
//         }
//     }


//     for (let i in str2) {
//         if (map2.get(str2[i]) == undefined) {
//             map2.set(str2[i], 1)
//         } else {
//             map2.set(str2[i], map2.get(str2[i]) + 1)
//         }
//     }

//     let array1 = [];
//     let array2 = [];

//     for (var pairs1 of map1) {
//         if (pairs1[1] > 1) {
//             array1.push(pairs1[1])
//         }
//     }
//     // console.log(array1)


//     for (var pairs2 of map2) {
//         if (pairs2[1] > 1) {
//             array2.push(pairs2[1])
//         }
//     }
//     // console.log(array2)


//     if (pairs1[1] == pairs2[1]) {
//         console.log("Yes")
//     }
//     else {
//         console.log("No")
//     }

// }
// const str1 = "hello world"
// const str2 = "albcllsyaaaaaaaakoakp"
// // duplicate(str1,str2)