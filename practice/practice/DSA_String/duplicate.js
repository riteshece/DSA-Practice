// //find count of the duplicate char from given string
// function countDuplicate(str1) {
//     let str = str1.split("")
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         if (!map.get(str[i]) == undefined) {
//             map.set(str[i], 1)
//         } else {
//             map.set(str[i], map.get(str[i]))
//         }
//     }

//     let count = 0;
//     for (let key of map) {
//         if (key[1] > 1) {
//             count++;
//         }
//     }
//     console.log(count)
 
// }

// countDuplicate("akashkolkar")



function removeDuplicates( s , n) {
    var exists = new Map();

    var st = "";
    let count=0;
    for (var i = 0; i < n; i++) {
        if (!exists.has(s[i])) {
            st += s[i];
            count ++;
            exists.set(s[i], 1);
        }
    }
    return count;
}

// driver code
 
    var s = "geeksforgeeks";
    var n = s.length;
    
    console.log(removeDuplicates( s , n))