// //selectionsort
// function selection(arr){  
//     for(let i=0;i<arr.length;i++){    //[2,4,34,1,22,18]
//        let min=i                       //min=0
//        for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){        //1<2
//                 min= j                  //min=3
//             }
//            let temp=arr[i]             //temp=2
//                arr[i]=arr[min]         //arr[i]=1
//                 arr[min]=temp           //arr[min]=2
//        }
//     }
//      console.log(arr)                  //[1,4,34,2,22,18]                                  //min=1
//  }                                     // arr[j]<arr[min]
//  selection([2,1,34,22,18])             //2<4
//                                        //min=3
//  //[2,1,34,22,18]                      //temp=arr[i]
//                                        //arr[i]=arr[min]
//                                        //arr[min]=temp
//                                        //[1,2,34,4,22,18]
 
//  //[1,2,34,4,22,18]
//  for(let i=5;i<arr.length;i++){
//     min=i//min=2
//  }
//  for(let j=i+1;j<arr.length;j++){
//     if(arr[j]<arr[min]){//4<34
//        min=j    //  min=3       
//     }
//     let temp=arr[i]
//     arr[i]=arr[min]
//     arr[min]=temp
//  }
//  console.log(arr)
 
//  //[1,2,4,34,22,18]
//  min=3 (i)]
//  min=4 (j)
 
//  //[1,2,4,22,34,18]
 
//  min=4
//  min=5
//  //[1,2,4,22,18,34]


function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min=i   //min=0
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
            min=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    console.log(arr)
}
let result=selection([15,3,6,8,5,8])
console.log(result)








// selectionsort
// function selection(arr){  
//     for(let i=0;i<arr.length;i++){    //[2,4,34,1,22,18]
//        let min=i                       //min=0
//        for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){        //1<2
//                 min= j                  //min=3
//             }
//            let temp=arr[i]             //temp=2
//                arr[i]=arr[min]         //arr[i]=1
//                 arr[min]=temp           //arr[min]=2
//        }
//     }
//      console.log(arr)                  //[1,4,34,2,22,18]                                  //min=1
//  }                                     // arr[j]<arr[min]
//  selection([2,1,34,22,18])             //2<4
//                                        //min=3
//  //[2,1,34,22,18]                      //temp=arr[i]
//                                        //arr[i]=arr[min]
//                                        //arr[min]=temp
//                                        //[1,2,34,4,22,18]
