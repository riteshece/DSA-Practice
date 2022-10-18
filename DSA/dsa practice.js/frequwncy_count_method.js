//find maximum occurrence number
const arr =['1','5','6','9','2','1','5','6','9','8','10','5','2','1','6','1','7','8','9']
let max_occurrence = 0; //o(1)
for(let i =0 ;i<arr.length;i++){
    let currentCharacterCount=0;  //o(1)
    for(let j =0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            currentCharacterCount=currentCharacterCount+1;

        }
    }
    if(currentCharacterCount>max_occurrence){ //o(1)
        max_occurrence=currentCharacterCount;  //o(1)
        

    }
}
console.log(max_occurrence)
//o(1)+o(n)*