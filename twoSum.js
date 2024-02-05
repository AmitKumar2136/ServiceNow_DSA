const nums = [3,3], target = 6;


function twoSum(nums, target){
    
    let index = 0;
    let length = nums.length;
    while(index < length){
         for (let i= index+1; i< nums.length; i++){
                if(nums[index] + nums[i] === target){
                   return [index, i];
                }
        }
        index++;
    }
        
}

const output = twoSum(nums, target);
console.log(output);