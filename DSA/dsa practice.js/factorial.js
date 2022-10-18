//fibbonacci series
  
function fibbo(n){
    if(n<=2){
        return 1
    }
    else{
        return fibbo(n-1)+fibbo(n-2)
    }
}
console.log(fibbo(7))

//0 1 1 2 3 5 8 13 21 34

// fibbo(4)=fibbo(3)+fibbo(2)=2+1=3
//        fibbo(3) =fibbo(2)+fibbo(1)=2
//         fibbo(2)=1
   
