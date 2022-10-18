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

console.log(uniqueSubstring("abcabcbb"))
