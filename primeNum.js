var a = 127;


function IsPrimneNum(num){
    if ( num <= 1) return false;
    if (num <= 3) return true;

    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }

  return true;
}

const result = IsPrimneNum(a);
console.log(result);