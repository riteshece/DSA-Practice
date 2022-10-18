
// print a natural number in reverse order 
function reverseNum(num){
    let r=[];
    while(num>=1){
        r.push(num)
        num--
    }
    return r
}
let result= reverseNum(10)
console.log(...result)
