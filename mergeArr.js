const arr1 = [10, 20,30,45,50];
const arr2 = [8,15,18,26,35];


function mergeArr(arr1,arr2){
    const newSortedArr = [...arr1, ...arr2].sort((a,b)=>a-b);
    return newSortedArr;
}

const output = mergeArr(arr1, arr2);
console.log('output', output);

