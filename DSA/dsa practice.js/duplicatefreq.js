let arr = [2,5,2,7,4,3,7,7,8,7,3,2]; //2
function dup(arr){
    let obj = new Map() // {2:3,5:1,7:1,4:1,3:1,8:1}
    for(let i=0;i<arr.length;i++){
        if(!obj.get(arr[i])){
            obj.set(arr[i],1)
        }
        else obj.set(arr[i],obj.get(arr[i])+1)
    }
        console.log (obj)
        let r = []
        for(let elements of obj){
            if(elements[1]>1) // 1 is denoting value here
                r.push(elements[0]) // 0 is denoting key here
            }
            return r
       }
       console.log(dup(arr))

       