//// find duplicate element in an array  ////////////

const array = [5, 2, 1, 3, 2, 4, 4, 5, 6, 6, 7];
const dup = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j] && !dup.includes(array[i])) {
            dup.push(array[i]);
        }
    }
}

console.log("Duplicate elements in the array:", dup);

///// output: Duplicate elements in the array: [ 5, 2, 4, 6 ]



////   find element present or not   /////

const arr = [5, 2, 1, 3, 2, 4, 4, 5, 6, 6, 7];
console.log(arr.includes(50))

/////   output given in the form of true or false