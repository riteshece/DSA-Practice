// function isPrime(num){
//     if(num<2)  //here we take num is less than 2 bcz prime num is start from 2
//     return `${num} is not a prime  number`
//     for(let i = 2; i < num;i++){
//         if(num % i === 0){
//             return`${num} is not a prime num`
            
//         } 
//     }
//     return`${num} is a prime Number`
// }
// let result = isPrime(23)
// console.log(result)

//
 function isPrime(n){
    if(n<2){
        return `${n} is not a prime number`
    }
   
    for(let i = 2;i<n;i++){
        if(n%i===0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number` 

 }
 console.log(isPrime(98))