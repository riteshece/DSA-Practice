//find the count negative number from array
function countNegative(arr) {
    let count = 0;
    for (let key of arr) {
        if (key < 0) {
            count++;
        }
    }
    console.log(count);
}

countNegative([1, 5, -5, 3, -6, -4, -3])