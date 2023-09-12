////////   remove duplicates   ////////////


let arr1 = [3, 3, 6, 8, 3, 7, 8, 6, 6, 1];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        arr2.push(arr1[i]);
    }
}

console.log(arr2);


///////    output :  [ 3, 6, 8, 7, 1 ]     /////////