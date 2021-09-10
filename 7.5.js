const readlineSync = require("readline-sync");
let arrayToSort = [4, 7, 15, 5, 4, 8, 2, 1, 2, 6];
let sortIsFinish = false;
let stockTemporary=0;
function sortMe(arr) {
    while (!sortIsFinish) {
        sortIsFinish = true;
        for (i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                sortIsFinish = false;
                stockTemporary = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = stockTemporary;
            }
        }
    }
    return arr;
}
console.log(sortMe(arrayToSort))