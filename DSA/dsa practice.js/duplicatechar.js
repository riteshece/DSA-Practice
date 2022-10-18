// let arr=[3,4,65,57,88,78,89,3,79,78,79]
// let count=1;
// let arr1=[];
// function duplicatechar(arr){
//     for(let i =0;i<arr.length;i++ ){
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++
//                 arr1.push(arr[i])
//             }
//         }
//     }
    
// return arr1
// }
// console.log(duplicatechar(arr))

// function add(a,b){
//     return a+b;

// }
// console.log(add(4,6))


//callback function 
//function second(name){
//      console.log(name)
// }
// function first(callback){
//     callback('alex')
// }
// console.log(first(second))



//find the duplicATe array element in the array

let arr3=[1,2,4,78,9,3,2,5,3]
let arr2=[]
let count=1;
function duplicateArray(){
    for(let j=0;j<arr3.length;j++){
        for(let k=j+1;k<arr3.length;k++){
            if(arr3[j]==arr3[k]){
                arr2.push(arr3[j])
                count++
            }
           
        }
    }
    return arr3
}
console.log(duplicateArray(arr3))
