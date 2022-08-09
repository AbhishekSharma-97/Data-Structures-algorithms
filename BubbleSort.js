function BubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        console.log('One loop passed!!!!')
    }
    
}

BubbleSort([23,45,2,5,12])