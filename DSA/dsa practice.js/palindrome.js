// //  function isPalindrome(str) {
    
// //   for(let i = 0;i<str.length;i++){
// //     for(let j = 1;j<str.length-1;j--){
// //         if(str[i]==str[j]){
// //             return true
// //         }else
// //             return false
// //   
// //   }
// // }
    
// // };
// // const result = isPalindrome("radar")
// // console.log(result)


// //isPallindrome

// function isPalindrome(str){
//   var len=String.length
//   for(let i=0;len/2;i++){
//     if(String[i]!=String[len-1-i]){
//       console.log("Its not a palindrome")
//     }
//   }
//   return "true"
// }
// console.log(isPalindrome("madam"))


//**************************************** *//
 function isPalindrome(str){
  let l=0
  let r=str.length-1
  while(l<r){
    if(str[l]!==str[r]){
      return false
    }
    l++
    r--

  }
  return true
 }
var result=isPalindrome("mad a m")
 console.log(result)




 //********************************************************************** */a

 function isPalindrome(num){
  let newString=""
   num =num+""
  for(let i=num.length-1;i>=0;i--){ 
      newString+=num[i]
      if(newString===num)
          
          return true
  }
  return false
  
  
};
console.log(isPalindrome(121))