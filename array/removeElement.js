let arr=[1,2,3,4,5]
let position=3;
for(let i=3;i<arr.length-1;i++){
    console.log(i)
    arr[i]=arr[i+1]
}
arr.length=arr.length-1
console.log(arr)