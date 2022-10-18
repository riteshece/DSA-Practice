//falttering Array
let arr = [[1,2,3],[3,54,65],[4,23,76]]
let sum=0;
let maxSum=0;
function maxamount(arr){
    for(let i = 0;i<arr.length;i++){
        let sum = 0;
        for(let j = 0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
        if(sum>maxSum){
            maxSum=sum
        }
        
    }
    return maxSum

}
console.log(maxamount(arr))