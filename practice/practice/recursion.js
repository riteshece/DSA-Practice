//Recursion is the function calling itself until base condition satisty

// Note.
// 1.forget to define the base case
// 2.forget to return from base case
// 3.returning the wrong parameter


// 1.sum of nth numbers by recursion

function sumByRecursion(n) {
    if (n == 1) {     //base condition
        return n;
    }
    return n + sumByRecursion(n - 1)
}

// console.log(sumByRecursion(5))



// sum of array 
function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}

// console.log(findSum([1,2,3,4,5],5))

// 2.
function countDown(count) {
    if (count < 0) {
        return
    }
    console.log(count);
    count--;

    countDown(count)
}
// countDown(10)


3.

function printArray(index) {
    if (index >= arr.length) {
        return
    }
    console.log(arr[index])
    index++;

    printArray(index)
}

// const arr = [3,4,5,6,7,8]
// printArray(0)





// 1. factorial of n number
function fact(n) {
    if (n == 1) {
        return 1
    }

    let ans = n * fact(n - 1);

    return ans;
}
// console.log(fact(10))





// 2.product of Array Element
function product(arr) {
    if (arr.length == 0) {
        return 1;
    }
    return (arr[0] * product(arr.splice(1)));
}
// console.log(product([1,2,3,4,5]))






// 3.fibonacci series
// fibo(n) = fibo(n-1) + fibo(n-2)
// 1,1,2,3,5,8,13
function fibo(n) {
    if (n <= 2) {
        return 1;
    }

    return fibo(n - 1) + fibo(n - 2)
}
// console.log(fibo(5))






// 4.power of given number
function power(num, exp) {
    if (exp == 0) {
        return 1
    }

    return num * power(num, exp - 1)
}
// console.log(power(2,5))




// 5.(a) capitalize 1st char in the array
function cap(arr) {
    if (arr.length == 0) {
        return [];
    }
    let res = [];

    // pull out 1st char from arr and capitalize 1st char "abc" => "A" + "bc"
    let s = arr[0][0].toUpperCase() + arr[0].slice(1);

    res.push(s) //["Abc"]

    return res.concat(cap(arr.slice(1)));
}
let output = cap(["abc", "efg", "pqr"])
// console.log(output)







// 5.(b)
function cap(array, index) {
    if (index < array.length) {
        array[index] = array[index][0].toUpperCase() + array[index].slice(1);
        cap(array, index + 1)
    }
}
const array = ["all", "the", "best"]
cap(array, 0)
// console.log(array)







//6.reverse the given sentence in given mannepr "hi to all"  => "ih ot lla"
function reverse(s) {
    if (s.length <= 1) {
        return s;
    }
    return reverse(s.slice(1)) + s[0];  //reversing 1st word "hi" => "i" + "h"  => "ih"
}

function reverseWord(sent) {
    let arr = sent.split(" ");  //"hi to all" => ["hi", "to","all"]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverse(arr[i])     //reversing 1st word "hi" => "i" + "h"  => "ih" same till last word
    }
    return arr.join(" ")     //["ih","ot","lla"] => "ih ot lla"
}
// console.log(reverseWord("hi to all"))



// without split and recursion function
const solution = (str) => {
    let ans = ""
    let temp = ""
    for (let i = str.length - 1; i >= -1; i--) {

        if (str[i] == " " || i == -1) {
            ans = temp + " " + ans
            temp = ""
        } else {

            temp += str[i]
        }
    }
    return ans
}
// console.log(solution("hello world"))





//7.duplicates numbers 
function duplicate(arr) {
    let freq = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (freq.get(arr[i]) == undefined) {
            freq.set(arr[i], 1)
        } else {
            freq.set(arr[i], freq.get(arr[i]) + 1)
        }

    }
    console.log(freq.values())

    let res = [];
    for (let pairs of freq) {
        if (pairs[1] > 1) {
            res.push(pairs[0])
        }
    }
    return res;
}
// console.log(duplicate([2, 3, 4, 5, 1, 2, 3,2,3, 5, 6]))



