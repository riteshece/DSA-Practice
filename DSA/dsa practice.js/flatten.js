//[1,2,[3,4],[5,6]]
//flatten Array
function flatten(arr){
let flat=[]
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])==false){
        flat.push(arr[i])
    
    }else{
        flat =flat.concat(arr[i])

    }
}
return flat

}
console.log(flatten([1,2,[3,4],[5,6]]))

// Array.isArray(1)
// console.log(Array.isArray(2))