
let newEle=3;
let position=2
//console.log(arr)
for(let i=arr.length-1;i>=0;i--){
    // console.log(arr[i])
    if(i>=position){
        arr[i+1]=arr[i]
        if(i==position){
            arr[i]=newEle
        }
    }
  

}
console.log(arr)