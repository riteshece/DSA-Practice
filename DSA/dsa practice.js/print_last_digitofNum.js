function last(num){
    arr =num.split("")
   arr.unshift(arr.pop())
    return arr[0]

}
let result =last("345")
console.log(result)


