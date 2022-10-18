function mergeArray(arr1, arr2, results = []) {
    let arr1CurrIndex = 0;
    let arr2CurrIndex = 0;
    let obj = {}

    while (arr1CurrIndex < arr1.length && arr2CurrIndex < arr2CurrIndex) {

        if (arr1[arr1CurrIndex].name > arr2[arr2CurrIndex].name) {  //if arr1 name index is > arr2 name of index 
            if (!obj[arr2[arr2CurrIndex].name]) {
                results.push(arr2[arr2CurrIndex])
            } else {
                results[obj[arr2[arr2CurrIndex].name]] == arr2[arr2CurrIndex]
            }
            obj[arr2[arr2CurrIndex].name] = results.length - 1
            arr2CurrIndex++;
        }
        else {
            if (!obj[arr1[arr1CurrIndex].name]) {
                results.push(arr1[arr1CurrIndex])
            } else {
                results[obj[arr1[arr1CurrIndex].name]] == arr1[arr1CurrIndex]
            }
            obj[arr1[arr1CurrIndex].name] = results.length - 1
            arr1CurrIndex++;
        }
    }

    //if arr1 element exhaust
    while (arr1CurrIndex < arr1.length) {
        if (!obj[arr2[arr2CurrIndex].name]) {
            results.push(arr2[arr2CurrIndex])
        } else {
            results[obj[arr2[arr2CurrIndex].name]] == arr2[arr2CurrIndex]
        }
        obj[arr2[arr2CurrIndex].name] = results.length - 1
        arr2CurrIndex++;
    }

    //if arr2 element exhaust
    while (arr2CurrIndex < arr2.length) {
        if (!obj[arr1[arr1CurrIndex].name]) {
            results.push(arr1[arr1CurrIndex])
        } else {
            results[obj[arr1[arr1CurrIndex].name]] == arr1[arr1CurrIndex]
        }
        obj[arr1[arr1CurrIndex].name] = results.length - 1
        arr1CurrIndex++;
    }

    // return results;
}
let results = [];
let arr1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 }
];

let arr2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "b", value: 111 }

]

console.log(mergeArray(arr1, arr2, results))
// console.log(results)