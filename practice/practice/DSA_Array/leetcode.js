// 1.remove array Element
function remove(num, val) {
    let s = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] != val) {
            s.push(num[i])
        }
    }
    return s;
}
// console.log(remove([0,1,2,2,3,0,4,2], 2))