let arr=[1,2,3,4,5,6,7,8,9]
function findIndex(arr){
    let x =7;
    n = arr.length;

    for(let i =0;i<n;i++){
        if(arr[i]==x){
            return i
        }
       
    }

    return false
}
let result =findIndex(arr)
console.log(result)