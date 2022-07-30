function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var currentVal = arr[i];
        for (let j = i -1; j >=0 && arr[j] > currentVal ; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr
}

insertionSort([3,10,24,9,75])