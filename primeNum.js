var num = 11;

function isPrimeNum(num){
    
    if(num <=1) return false;
    if(num <=3) return true;
    
   for (let i= 2; i<=Math.floor(num/2); i++){
       if(num % i === 0){
           return false;
       }
   }
    
    return true;
    
}


const output = isPrimeNum(num);
console.log('output', output);

