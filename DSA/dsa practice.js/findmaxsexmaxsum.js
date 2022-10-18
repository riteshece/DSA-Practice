// find the maximum sum of any two elements in a given array
let arr = [12,4,67,2,34]
let sum;
let max = arr[0]
let secMax = arr[1]
function MaxSum(arr){
    for(let i=2;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
            
            
            // now we will update the second largest number here
        }
       else if(arr[i]>secMax){// [67,4,12,2,34] => [67,34,4,2,12] =>  
            secMax = arr[i]
            sum = max+secMax 
        }
    }
    return sum
    
}
let result=MaxSum(arr)
console.log(result)