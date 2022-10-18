// function findUnique(str){
//     // The variable that contains the unique values
//     let uniq = "";
//      let count = 0;
//     for(let i = 0; i < str.length; i++){
//       // Checking if the uniq contains the character
//       if(uniq.includes(str[i]) === false){
//         // If the character not present in uniq
//         // Concatenate the character with uniq
//         uniq += str[i]
//         count++
//       }f
//     }
//     return count
//   }
   
//   console.log(findUnique("Geeksforgeeks"))

// find max/min num in array in array 

function MaxNum(arr){
//let arr=[4,5,6,7,8,9,10,12,14,15,123]
// let max=Math.max(...arr)
let max =arr[0]
for(let i=0;i<arr.length;i++){
  if(arr[i]>arr[0]){
    max =arr[i]
  }
}
return max

}
let result = MaxNum([4,5,6,7,8,9,10,12,14,15,123])
console.log(result)

