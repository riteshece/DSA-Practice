//find max occurence element in the array
let arr=[3,4,5,6,6,7,2,2,3,5,6]
function findmaxoccurence(arr){
    let count=0;
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
        max=arr[i]
        
        }
    

    } return count

}
console.log(findmaxoccurence(arr))
