
//(Binary  search method used to find a index of a given element in the array)
// let arr = [5,10,15,20,25,30,35,40,45,50]
// let x =45;
// let n = arr.length;
// let left = 0;
// let right = n-1
// function binarySearch(left,right,arr,x){
//     while(right>=left){
//         let mid = left +Math.floor((right-left)/2)
//         if(arr[mid]==x){
//         return mid
//         }
//         if(arr[mid]>x){
//             return binarySearch(left,mid-1,arr,x)
//         }
//         return binarySearch(mid+1,right,arr,x)

//     }
//     }
//     let result =binarySearch(left,right,arr,x)
//     console.log(result)


 //time complexity of binary search is o(log(n))

 


 let arr1=[1,2,3,4,5,67,89]
 let y =3
 let lefty =0;
 let m = arr1.length;
 let righty = m-1;
 
 function binarySearch(arr1,lefty,righty,y){
     while(righty>lefty){
         let mid1 = lefty +Math.floor((righty-lefty)/2)
         if(arr1[mid1]==y){
         return mid1
     }
     return binarySearch(mid1+1,righty,arr1,y)
     
 }
}s
let finale =binarySearch(lefty,righty,arr1,y)
console.log(finale)
