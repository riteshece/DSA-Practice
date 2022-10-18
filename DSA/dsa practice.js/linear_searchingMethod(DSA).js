
// Javascript code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

// Driver code
// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 10;
// let n = arr.length;

// function search(arr, n, x)
// {
	
	
// 	for (let i = 0; i < n; i++)
// 	  if (arr[i] == x)
// 	return i;
// 	return -1;
// }

// 	// Function call
// 	let result = search(arr, n, x);
// 	console.log(result)
	



let arr1 = [8,9,40,70,50];
let x =70

let n=arr1.length;

function search(arr1,n,x){

for(let i =0;i<n;i++){

if(arr1[i]==x)

return i 
}
return -1
	
}
let result1 = search(arr1, n, x);
console.log(result1)



// let arr3=[4,56,46,90,78,8,76]
// let p=8;
// let l=arr3.length

// function search(arr3,l,p){
// 	for(let i=0;i<l;i++)b
// 	if(arr3[i]==p)
// 	return i 
// 	return -1
// }
// let finale = search(arr3,l,p)
// console.log(finale)

//8************time complexicity of linearsearch o(n)

// finding index using inBuilt function
// let arr4=[4,56,46,90,78,56,76];
// let r= arr4.indexOf(78)
// console.log(r)


// let x=46;
// let n=arr4.length

// function search(arr4,x,n){
// 	for(let i =0;i<n;i++)
// 	if(arr4[i]==x)
// 	return i
// 	return -1
// 	}

// let ans = search(arr4,x,n)
// console.log(ans)


// let x={

// 	firstname:"Tom",
	
// 	lastname:"John"
	
// 	}
	
// 	let y=x
	
// 	y.firstname="karan"
	
// 	console.log(x)
	// function x(){

	// 	num=10
		
	// 	}
		
	// 	x()
		
	