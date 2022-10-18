// let arr=[8,34,56,56,44,23]
//     function maxnum(arr){
//      let max1=arr[0];
//      let max2=arr[1];
//      if(max1<max2){   
//         let temp=max1
//         max1=max2  //max1=34
//         max2=temp  //max2=8
         
//      }
//         for(let i=3;i<arr.length;i++){
//             if(arr[i]>max1){        //max1=56
//                 max2=max1             //max2=34
//                 max1=arr[i]
//             } else if(arr[i]>max2 && arr[i]!=max1){ 
                                                        
//                 max2=arr[i]          
                
//             }
//         }
     
//     console.log(max1)
//     console.log(max2)
// }
// maxnum(arr)




let arr =[1,2,34,56,78]
function maxele(arr){
    let max1=arr[0];
    let max2=arr[1];
    if(max1<max2){
    let temp =max1
    max1=max2
    max2=temp
    }
    for(let i=3;i<arr.length;i++){
        if(arr[i]>max1){
            max2=max1
            max1=arr[i]
        } else if(arr[i]>max2 && arr[i]!=max1){
            max2=arr[i]
        }

    }
    console.log(max1)
    console.log(max2)

}
console.log(maxele(arr))