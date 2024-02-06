function mergeArr(arr1, arr2){
    const mergedArr = [...arr1, ...arr2];
    function sortedArr(arr){
        if(arr.length <=1){
            return arr;
        }
        const pivot = arr[0];
        const left = [];
        const right = [];
        for(i=1; i<arr.length; i++){
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]) 
        }
       return [...sortedArr(left), pivot, ...sortedArr(right)];
    }
 
return sortedArr(mergedArr)
 
}
const arr1 = [ 10, 20, 30, 45, 50];
const arr2 = [ 15, 25, 26, 35];
const output = mergeArr(arr1, arr2);
console.log(output);
