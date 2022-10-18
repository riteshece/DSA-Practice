//using sort
// arr=[9,6,3,7,1]
// arr.sort();
// console.log(arr)

// finding even/odd element from the given array

let arr =[1,2,3,4,5,6,7,8,9,10]
let arr1=[];
let arr2=[];
function OddEven(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr1.push(arr[i])
        }
        else 
        arr2.push(arr[i])
    }
    return arr1
    return arr2
}
let result = OddEven(arr)
console.log(result)
