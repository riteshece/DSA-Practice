let arr=[{"firstname":"sumit","lastname":"gupta","age":20},
        {"firstname":"ritesh","lastname":"gupta","age":23},
        {"firstname":"ankit","lastname":"gupta","age":40},
        {"firstname":"suraj","lastname":"gupta","age":50}]

// arr.map(x=>x.firstname+" "+x.lastname).filter(x=>x.age>=40)
// console.log(arr)

let result=arr.filter(x=>x.age>=40)
console.log(result)
// let arr=[1,2,3,4,5,6,7,8]

// arr.map(x=>x*2).filter(x=>x>10)

// arr.filter(x=>x%2==0)