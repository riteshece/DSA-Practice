// const numbers =[];
// for(var i =0; i < 4;i++);{
//     numbers.push(i+1);
// }
// console.log(numbers);



// for (let i=1; i<=10; i++)
// {
//     // number divisible by 3 and 5 will
//     // always be divisible by 15, print
//     // 'FizzBuzz' in place of the number
  
     
//     // number divisible by 3? print 'Fizz'
//     // in place of the number
//      if ((i%3) == 0)
//         console.log("Fizz");               
     
//     // number divisible by 5, print 'Buzz'
//     // in place of the number
//     else if ((i%5) == 0)                   
//         console.log("Buzz")  

//          // number divisible by 3 and 5 will
//     // always be divisible by 15, print
//     // 'FizzBuzz' in place of the number

//        else  (i%15 == 0)   
//         console.log("FizzBuzz");    
 
//     // else // print the number       
//     //     console.log("FizzBuzz")              
// }

//------------------Sum of elements of the array whose square root is present in the array------------------ 
//1 2 3 4 6 9 10

//  process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }
// function solution(a,arr) {
//   //Write your solution here
//     let sum = 0;
//     for(let i=0; i<arr.length; i++)
//     {
//         let sq= arr[i]* arr[i];
//         if(arr.includes(sq)) sum+=sq;
//     }
//     return sum;
   
// }

// function main() {
//     var a = parseInt(readLine());
//     var arr = readLine().split(" ").map(Number)
  
//     var res = solution(a,arr);
//     console.log(res);
// }

//sum of all given integer in string
// function solution(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//     sum += arr[i]
//     }
//     return sum
//     }
//     console.log(solution([1,2,3,4,5]))


// //spread operator
// arr =[1,23,4,6]
// arr2=[1,4,6,7]
// let arr3=[];
// var result =arr.concat(arr2) 
// result.push()

// // const r =[...arr,...arr2]
// console.log(result)
// //rest operator





//use of dollar($)
// let name1 = 'ritesh' 
// console.log(`hello, ${name1}`)

//concept
// let a=1;
// let b=3;
// [a,b]=[b,a]
// console.log(a,b);

//basics-concept

// {
//     var a='a'
//     var a='b'
//     console.log(a)
// }
// console.log(a)

//remove element in the array
// const array = [2, 5, 9];
// array.splice(1,1)

// console.log(array);

// array = [2, 9]


//checking type of variable
// var name1 = 122
// console.log(name1)
// console.log(typeof(name1))


// var myName =' Ritesh Gupta'
// myName ='jhadoo'
// myName ='Happy'
// console.log(myName)

//tochechinglowercase and uppercase
// var naam ='RiteSH'
// console.log(naam.toUpperCase())
// console.log(naam.indexOf('H'))
// console.log(naam.split('RiteSH'))
// let num=12;
// let num2=12.5
// console.log(num +num2)

// let num3='12';
// let num4=12.5
// num3=parseFloat(num3)
// console.log(num3+num4)
// console.log(num3 +num4)


//mathmetical operation in js
// var a = 35
// var b = 6
// var sum = (a+b)
// console.log(sum)
// var mult = a*b
// console.log(a*b)
// var div = a/b
// console.log(a/b)

// var div = a%b
// console.log(a%b)

// var c =20
// var d =45
// c++
// d--
// console.log(c)
// console.log(d)

// let Username="Ritesh "
// let age =24
// let result =Username + age
// console.log(result)
 

//*********concept********
// let r ='6'+ [4]
// console.log(r)

 //FOR GENERATING LIKE NUMBER
//  var randomNumber= Math.floor(Math.random()*1000000)
//  console.log(randomNumber)



//  let number =0;
//  console.log(number++)
//  console.log(++number)
//  console.log(number)
//  Answer is 0,2,2
// Reason: Initially the number value is 0,
// 1️⃣ console(number ++ )=>which is the post increment by 1 , it is incremented by 1 but it is not stored in the variable number . So it will print 0.
// 2️⃣ console (++number) => Previously,the value was incremented by 1 and here it is pre increment by 1 , so 1+1 is 2 , now the number value will be 2. It will print 2.
// 3️⃣console(number)=> Number will return the last updated value , so it will simply print 2 .
// Thereby we get 0,2,2 s

//array js
// const arr1=['ritesh']
// const arr2=['gupta']
// let result=arr1.concat(arr2)
// console.log(result)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift(1);
console.log(...fruits)