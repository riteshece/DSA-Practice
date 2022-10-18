//reverse given string with out recursion
function reverse(str) {
    let str1 = str.split("");
    let i = 0;
    let j = str1.length - 1

    while (i < j) {
        [str1[i], str1[j]] = [str1[j], str1[i]]

        i++;
        j--;
    }
    let str2 = str1.join("")
    console.log(str2)
}

reverse("akash")