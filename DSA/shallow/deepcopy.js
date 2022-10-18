//shallow copy
// let obj1={
//     name:"ritesh",
//     pincode:"74647",
//     mobile:"8347637",
//     address:{
//         city:"gomtinagar"
//     }
// }                            //shallow copy karne pe nested ke andr change hoga bas par bina nested wale me change nahi hoga

// let obj2={...obj1}
//  obj2.address.city="kanpur"
//  obj2.name='gupta'
// console.log(obj1)



//deepcopy


let obj3={
    name:"ritesh",
    pincode:"74647",
    mobile:"8347637",  //deep copy me kisi me change nahi hoga na nested me na hi bina nested me
    
    address:{
        city:"gomtinagar"
    } 
}

let obj4= JSON.parse(JSON.stringify(obj3))

obj3.address.city="charbagh"

console.log(obj4)