// 1. swap the number without using 3rd temp variable;
function swap(a, b) {
    [a, b] = [b, a]
    // a = a + b;      // 2+3=> 5
    // b = a - b     // 5-3=> 2
    // a = a - b
    return [a, b]   // 5-2=> 3
}
// console.log(swap(5,10))





// 2.find the sum of two elements from array which larger
function largestNumberSum(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return largest + secondLargest;
}
// console.log(largestNumberSum([5, 3, 6, 4, 7, 19, 2, 15,]))






// 3.check given num is integer or not without freedefine function
function checkInt(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0 && input[i] <= 9) {
            isNumber = true;
        } else {
            isNumber = false;
        }
    }
    return isNumber;
}
// console.log(checkInt("12345"))





//4.with regex 
function integer(input) {

    let regex = new RegExp("^[1-9]+$")

    return regex.test(input)
}
// console.log(integer("12345"))






//5.duplicate elements of an array
function replace(a) {
    let map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.get(a[i])) {
            map.set(a[i], map.get(a[i]) + 1)
        } else {
            map.set(a[i], 1)
        }
    }

    let results = [];
    for (let arr of map) {
        if (arr[1] > 1) {
            results.push(arr[0])
        }
    }
    return results;
}
// const a = [1, 2, 5, 2, 2, 5, 4]
// console.log(replace(a))






//6.merge two array with spread operators
function merge(arr1, arr2) {
    let m = [...arr1, ...arr2];
    return m;

}
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
// console.log(merge(arr1, arr2))






//7.rest operators
function sum(...nums) {
    let sumOfElements = nums.reduce((curr, pre) => curr + pre);
    return sumOfElements;
}
// console.log(sum(1, 2, 3, 4, 5))




//8.polindrome
function polindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    return str[0] === str.slice(-1) && polindrome(str.slice(1, -1))
}
// console.log(polindrome("madam"))





//9.reverse of string words
function reverse(str) {
    let str1 = ""
    let str2 = ""
    for (let i = str.length - 1; i >= -1; i--) {
        if (str[i] == " " || i == -1) {
            str1 = str2 + " " + str1;
            str2 = "";
        } else {
            str2 = str2 + str[i];
        }
    }
    return str1;
}
// console.log(reverse("they are playing a game"))






// 10.reverse of string words by using recursion
function reverse(str) {
    if (str.length == 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0]
}

function rotate(str) {
    let str1 = str.split(" ")
    for (let i = 0; i < str1.length; i++) {
        str1[i] = reverse(str1[i])
    }
    return str1.join(" ")
}
// console.log(rotate("they are playing a game"))






// 11.reverse an sorted array
function sortArray(arr) {
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr;
}
// console.log(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))







// 12.sort an array and moves all zeros right
function sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = i;
        while (current >= 1 && arr[current - 1] < arr[current]) {
            [arr[current - 1], arr[current]] = [arr[current], arr[current - 1]]
            current--;
        }
    }
    return arr
}
console.log(sorting([3, 2, 0, 4, 0, 5, 6, 0]))





//13.flat the arr
function flaten(arr) {
    if (arr.length === 0) {
        return [];
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) == false) {
            res.push(arr[i])
        } else {
            res = res.concat(flaten(arr[i]))
        }
    }
    return res
}
// console.log(flaten([1, 2, [[3, 4], [[5, 6, 7]]]]))





//14.
let a = {
    x: 10,
    y: { yy: 10 }
}

let b = JSON.parse(JSON.stringify(a));
// b = Object.assign(b,a)

b.y.yy = 20
// console.log(a)
// console.log(b)







15.//capitalize every word 1st char
function capitalize(arr) {
    if (arr.length === 0) {
        return [];
    }

    let results = []

    let char = arr[0][0].toUpperCase() + arr[0].slice(1)
    results.push(char)

    return results.concat(capitalize(arr.slice(1)))
}
// console.log(capitalize(["akash", "nilappa", "kolkar,"]))





//16.merge sorting
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)

}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    while (i < arr1[i]) {
        result.push(arr1[i])
        i++;
    }

    while (j < arr2[j]) {
        result.push(arr2[j])
        j++;
    }

    let set = new Set(result);

    return [...set]
}

// console.log(mergeSort([9, 8, 6, 7, 1, 2, 5, 4, 8, 3, 4, 7, 8, 9, 5, 6]))




// 17.bubbleSort
//input = [3,1,21,8,12,44]
//output = [3,1,12,8,21,44]
function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {

        for (j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 2]) {
                [a[j], a[j + 2]] = [a[j + 2], a[j]]
            }
        }
        return a;
    }
}
console.log(bubbleSort([3, 1, 21, 8, 12, 44]))





function maximum(arr) {
    for (let i = arr.length - 1; i >= -1; i--) {
        var sum = arr[i].concat(arr[i - 1])
    }
    return sum;
}
// console.log(maximum[3, 30, 34, 5, 9])
// output = 9534330



// 19. count the maximum word 
function countWord(str, word) {
    let str1 = str.split(" ")
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == word) {
            count++
        }
    }
    return count;

}
// console.log(countWord("There was a monkey in the zoo The monkey was very naughty", "zoo"))





//20.return index of the sum elements 
function indices(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === target) {
            return [i, i + 1]
        }
    }
    return false;
}
// console.log(indices([2, 7, 11, 15], 26))





// 21.casing str good luck"




let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
];
let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "b", value: 111 },
];
  // result: [
  //   { name: "a", value: 123 },
  //   { name: "b", value: 111 },
  //   { name: "c", value: 444 },
  //   { name: "d", value: 999 },
  // ];