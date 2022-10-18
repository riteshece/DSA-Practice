// // Toggle case of all characters

// Given a string S, toggle case of all the alphabet characters in the string. 

 

// Input
//     coDeziNgerUnivErsity@15 

 

// Output
//     COdEZInGERuNIVeRSITY@15 
 

// Assume that, 

// The length of string S is within the range [0 to 10000]. 

function solution(a) {
    let arr=a.split("")
    for(let i=0;i<arr.length;i++){
        if((/[a-zA-z]/).test(arr[i])){
           arr[i]=String.fromCharCode((arr[i].charCodeAt(0)^(1<<5)))
        }
    }
    return arr.join("")
  //Write your solution here
}


function main() {
    var a = readLine();

    var res = solution(a);
    console.log(res);
}
