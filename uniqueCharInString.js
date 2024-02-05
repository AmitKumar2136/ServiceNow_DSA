const  s = "leetcode";

function getfirstChar(str){
    let obj = {};
    let firstUnique;
    for (let i=0 ; i< str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++;
        }else{
            obj[str[i]] = 1
        }
    }
    
   for (let key in obj){
       if(obj[key] === 1){
          firstUnique = key;
          break;
       }
   }
    return str.indexOf(firstUnique) ;
}

const output = getfirstChar(s);
console.log(output);


