// 1. swap the string without using 3rd temp variable;
let x = "Anything"
let y = "Swap"
let l1 = x.length


x = x.concat(y)
y = x.slice(0, l1)
x = x.slice(l1)

// console.log(x,y)






// 2. hello => h e l l o
function changeStr(str) {
    let str1 = str.split("")

    return str1.join(" ")
}
// console.log(changeStr("Hello"))






//3.reverse the strings ex:akash => hsaka
function reverse(str) {
    if (str.length == 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0]
}
// console.log(reverse("akash"))






//4. reverse the sentence
function reverse(str) {
    if (str.length == 1) {
        return str;
    }

    return reverse(str.slice(1)) + str[0]
}

function sentReverse(str) {
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        str1[i] = reverse(str1[i])
    }
    return str1.join(" ")
}
// console.log(sentReverse('iam an backend developer'))





//5. reverse the sentence
function revSent(str) {
    let str1 = ""
    let str2 = ""

    for (let i = str.length - 1; i >= -1; i--) {
        if (str[i] == " " || i == -1) {
            str1 = str2 + " " + str1;
            str2 = "";
        } else {
            str2 = str2 + str[i]
        }
    }

    return str1;
}
console.log(revSent("they are playing a game"))





//6.capitalize every 1st char from array
function capitalize(arr) {
    if (arr.length == 0) {
        return [];
    }

    let array = [];
    let res = arr[0][0].toUpperCase() + arr[0].slice(1);
    array.push(res)

    return array.concat(capitalize(arr.slice(1)))
}
// console.log(capitalize(["kamble","kolkar"]))





//find the unique sub string 
function uniqueSubstring(str){
    let n = str.length;
    let results = 0;
   
    for(let i=0;i<n;i++){
   
       var visited = new Array(256);
   
       for(let j=i;j<n;j++){
           if(visited[str.charCodeAt(j)] == true){
               break;
           }else{
               results = Math.max(results, j-i+1)
               visited[str.charCodeAt(j)] = true;
           }
       }
    }
    return results;
   }
//    console.log(uniqueSubstring("abcabcbb"))
   