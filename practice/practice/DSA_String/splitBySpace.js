function splitbyspace(str) {
    let s1 = str.split("")

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == " ") {
            s1[i] = "\n"
        }
    }
    return s1.join("")
}
// console.log(splitbyspace("im an backend developer"))





