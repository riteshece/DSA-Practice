function sort01(arr) {
    let curr = 0;
    let count0 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count0++;
        }
    }
    let count1 = arr.length - count0;
    while (count0 > 0) {
        arr[curr] = 0;
        count0--;
        curr++;
    }

    while (count1 > 1) {
        arr[curr] = 1;
        count1--;
        curr++;
    }
    return arr;
}
// console.log(sort01[0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1])




let s1 = "AB"
let s2 = "CD"
let s3 = "ABCf"

let a= s1.split("")
let b =s2.split("")
let c = s3.split("")

let sr = a.concat(b)
let str = sr.join("")
if(sr == c){
    console.log("yes")
}else{
    console.log("no")
}

// console.log(str)