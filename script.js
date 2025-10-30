const arr = ['123', '235', '345', '456', '587', '278', '468'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i])
    }
}

for (let i = 1; i <= 100; i++) {
    let count = 0;
    
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(`${i} - Делители этого числа: 1 и ${i}`);
    }
}