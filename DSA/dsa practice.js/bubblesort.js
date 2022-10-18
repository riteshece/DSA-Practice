 //Bubble sort
//  let arr = [4,3,1,4,5,6]
//  function bubbleSort(arr){
    
//     for (let i=0; i<arr.length; i++){  // outer loop
        
//         for (let j=0; j<arr.length; j++){
            
//             if (arr[j] < arr[j+1]){
                
//                 let temp = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1]= temp
                
//             }
            
//         }
        
//     }
//     return arr
    
//  }
// console.log(bubbleSort(arr))

// time complexity O(n**2)
// best case O(n)

//mergesort
// function merge(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let results = [];
//     while(i < arr1.length && j < arr2.length) {
//      if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;  
//      }else {
//       results.push(arr2[j])
//       j++
//      }
//     }
//     while(i < arr1.length){
//      results.push(arr1[i]);
//      i++;
//     }
//     while(j < arr2.length){
//      results.push(arr2[j]);
//      j++;
//     }
//     return results
//    }
//    //Since we now have a merge function, lets finish up the remaining part of the algorithm by creating our merge sort function.
   
//    function mergeSort(arr){
//     if (arr.length <= 1) return arr;
    
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//      return merge(left, right);
//    }
//    return result
  // NB : This code and approach is transferable to any programming language.
   
  // You can copy the code and run it in a debugging mode and know what each line does by stepping through the code.
    //Cramming the steps cannot save you in the future excepts you understand how the code works. Happy Coding!!!.

    //bubble sort

    let arr= [3,2,5,4,1]
    function bubbleSort(arr){
        for(let i=0;i<arr.length;i++){
            for(let j =0;j<arr.length;j++){

                // if(arr[j]>arr[j+1]){
                    if(arr[j]>arr[i]){
                    // let temp =arr[j];
                    // arr[j]=arr[j+1];
                    // arr[j+1]=temp
                    [arr[j],arr[i]]=[arr[i],arr[j]] 
                    
                    //[arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                }
            }
        }
        return arr
    }
    console.log(bubbleSort(arr))
