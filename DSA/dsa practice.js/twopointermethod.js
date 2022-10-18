let arr =[1,2,3,4,5,6,7,8,9,10]
let x= 7;
function twoPointerSum(arr,n,x){
let i=0;
let j=n-1;
while(i<j){
    if(arr[i]+arr[j]==x){
        return true
    }
    if(arr[i]+arr[j]<x){
        i++
    }
    if(arr[i]+arr[j]>x){
        j--
    }
    
}
return false
}
let result = twoPointerSum(arr,4,x)
console.log(result)