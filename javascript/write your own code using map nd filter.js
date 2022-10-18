//write your own code using map snd filter

// for map syntax
const array1 = [8, 7, 5, 12];
let array=[];
for (i=0; i<array1.length; i++) {
   array.push(array1[i] * 2)
}
 console.log(array1)
 
//for filter syntax :
 const fruits =  ['apple', 'banana', 'grapes', 'mango', 'orange'];
 let array=[];
 for (i=0;i<fruits.length;i++){
   if(fruits[i].length>5) {
     array.push(fruits[i])
   }
 }
 console.log(array1)