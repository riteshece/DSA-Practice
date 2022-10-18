// 1.sum of given nth number
function sum(n) {
    if (n == 1) {
        return n;
    }

    return n + sum(n - 1)
}
// console.log(sum(5))







// 2.factorial
function fact(n) {
    if (n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}
// console.log(fact(5))






// 3.fibonacci
function fabi(n) {
    if (n <= 2) {
        return 1;
    }

    return fabi(n - 1) + fabi(n - 2)
}
// console.log(fabi(5))





// 4.power
function power(num, exp) {
    if (exp == 0) {
        return 1;
    }

    return num * power(num, exp - 1)
}
// console.log(power(2,5))





// 5.sum of array Element
function sumarray(arr, length) {
    if (length <= 0) {
        return 0;
    }

    return sumarray(arr, length - 1) + arr[length - 1]
}
// console.log(sumarray([1, 2, 3, 4, 5], 5))





// 6.reverse the sting word 
function reverse(str) {
    if (str.length == 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0]

}
// console.log(reverse("akash"))

function sentence(str) {
    let str1 = str.split(" ");

    for (let i = 0; i < str1.length; i++) {
        str1[i] = reverse(str1[i])
    }
    return str1.join(" ")
}
const str = "welcome to belgaum"
// console.log(sentence(str))



// another approch to reverse an string
function another(str) {
    let s1 = ""
    let s2 = ""

    for (let i = str.length - 1; i >= -1; i--) {
        if (str[i] == " " || i == -1) {
            s1 = s2 + " " + s1
            s2 = ""
        } else {
            s2 = str[i]
        }
    }
    return s1;
}
const sent = "welcome to belgaum"
// console.log(sentence(sent))







// 7.capitalize 1st char
function capitalize(array) {
    if (array.length == 0) {
        return [];
    }

    let res = []
    let stra = array[0][0].toUpperCase() + array[0].slice(1);
    res.push(stra);

    return res.concat(capitalize(array.slice(1)))
}
// console.log(capitalize(["hi", "welcome", "to", "goa"]))



// 
function solution(str) {
    const obj = {}
    let char = 1000
    for (let i of str) {
        obj[i] = obj[i] + 1 || 1
    }
    // return obj
    let arr = Object.values(obj)
    let min = Math.min(...arr)
    for (let key in obj) {
        if (obj[key] === min) {
            if (key.charCodeAt(0) < char) {
                char = key.charCodeAt(0)
            }
        }
    }
    return String.fromCharCode(char)
}
function main() {
    var a = String(readLine());

    var res = solution(a);
    // console.log(res);
}



// pairs of 
function sum(arr, sum) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] == sum) {
            return 1;
        }
        else if (arr[i] + arr[j] < sum) {
            j--;
        } else {
            i++
        }
    }
    return 0;

}
// console.log(sum([1,-2,3,8,7],6))