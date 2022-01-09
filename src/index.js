module.exports = function reverse (n) {
    let nStr = n.toString();
  
    let resultStr = '';
    
    for (let i = 0; i < nStr.length; i += 1) {
      if (nStr[i] === '-'){
        resultStr = `${resultStr}`;
      }
      else{
        resultStr = `${nStr[i]}${resultStr}`;
      }
        
    }
    return Number(resultStr);
}
