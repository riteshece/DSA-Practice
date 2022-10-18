const places = ['delhi', 'gurgaon', 'jaipur', 'pune'] 
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
 // IMPORTANT: solve all problems using using destructuring and rest 
 // ============================================================================= // //

 // 1. // remove first element from places array and print the remaining array
  //result = ['gurgaon', 'jaipur', 'pune'] 
  // ============================================================================= // 
 const [a,b,c,d,]= places;
 const [e,f,g,h]=morePlaces;
 const arr=[b,c,d]
 console.log(arr)
 




//2. // insert that element at the start of the morePlaces array and print the new array 
// result = ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
 // ============================================================================= // 
const arr1=[a,e,f,g,h]
console.log(arr1)


// 3. // take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array //result = ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',] 
const arr2=[f,g,h,a,b,c,]
console.log(arr2)

// 4. // destructure and store pincode into a variable named myPincode 
const myData = { name: "Rahul", age: 20, gender: "male", address: { pinCode: 123455, city:"delhi" }, likes:["music", "movies"] } 

myData.address.myPincode=myData.address.pinCode
  delete myData.address.pinCode;
 console.log(myData)

// 5. // destructure and store second like into a vaiable named myLike
myData.myLikes=myData.likes
delete  myData.likes;
console.log(myData)






