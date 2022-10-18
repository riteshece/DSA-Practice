// swapping two number without using third variable 
 let a,b
function swapping(a,b){
a=a+b //latest a=27,b=15
b=a-b //latest value of b=12
a=a-b //latest value of a =15
return (a,b)
}

var result =swapping(12,15)
console.log(result)