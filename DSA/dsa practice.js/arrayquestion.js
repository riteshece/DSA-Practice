// // find the negative number in the array
// let arr=[3,5,6,7,8,-9,-10]
// let arr2=[]
// function findnegativenum(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0) {
//             arr2.push(arr[i])
//         }
//     } return arr2
// }
// console.log(findnegativenum(arr))


// // find the count negative number in the array
// let arr1=[3,5,6,7,8,-9,-10]
// let count=0;
// function countnegativenum(arr){
//     for(let j=0;j<arr.length;j++){
//         if(arr1[j]<0){
//             count++
//         }
//     } return count
// }
// console.log(countnegativenum(arr1))



// find union and intersection in the array
//  let arr3=[12,13,14,11,5]
//  let arr4=[12,13,3,4,5]
//  let arr5=[]
//  let arr6=[]

//  function union(arr3,arr4){
//     for(let i=0;i<arr3.length;i++){
//         for(let j=0;j<arr4.length;j++){
//             if(arr3[i]==arr4[j]){
//                 arr5.push(arr3[i])
//             }
//             else if(arr3[i]!==arr4[j]){
//                 arr6.push(arr3[i],arr4[j])
//             }
      

//         }

//     } return arr5.concat(arr6)
//  }
//  console.log(union(arr3,arr4))

//  Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
// which has the maximum sum and return its sum.
// [1,3,5,,-2,4,7]

let arr=[1,3,5,-2,4,7]
let max=arr[0]
//let max2=arr[1]
function maxSum(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i]>max){
                max=arr[i]
            } else if(arr[j]>max2){
                max2=arr[j]
            }
        }
    } return [max,max2]

}
console.log(maxSum(arr))