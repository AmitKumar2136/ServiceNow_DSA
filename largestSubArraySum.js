const arr1 = [-2,1,-3,4,-1,2,1,-5,4];


function getSubArr(arr){
    let index = 0;
    const allSubWithSumObj = {};
   
    while (index < arr.length){
        for (let i=index+1; i <= arr.length; i++){
            const subArr = arr.slice(index, i);
            const subArrSum = subArr.reduce((acc, item)=>{
                return acc+item;
            },0);
            allSubWithSumObj[subArr] = subArrSum;
        }
        index++;
    }
    return allSubWithSumObj;
}
    

function getAllSubArr(arr){
  const sortedArr  = [];
  const allSubWithSumObj = getSubArr(arr);
 
  for (let key in allSubWithSumObj){
      sortedArr.push([key , allSubWithSumObj[key]]);
  }
  
  sortedArr.sort((a,b) => b[1] - a[1]);
  return sortedArr[0][1];
}

const output = getAllSubArr(arr1);
console.log('output', output);


