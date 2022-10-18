// let count=0;
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         count=count+i
//     }
// }
// console.log(count)



 //with function 
 function sumoffirstten(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        if(i%2==0){
            sum+=i
        }
    }
    return sum

 }
 console.log(sumoffirstten(5))