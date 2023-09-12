
//////       missing number in array      ////////

function findMissingNumber(list, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = list.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const n = 10;
const listWithMissingNumber = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const MissingNumber = findMissingNumber(listWithMissingNumber, n);
console.log("The missing number is:", MissingNumber);

/////         output : 7        ////////








