var nums = [1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1];

function getMaxCount(arr){
    let maxCount = 0;
    let currentCount = 0;
    
    for (let item of arr){
        if(item === 1){
            currentCount++;
            maxCount = Math.max(maxCount,currentCount);
        }else{
            currentCount = 0;
        }
    }
    return maxCount;
}

const output = getMaxCount(nums);
console.log(output)
