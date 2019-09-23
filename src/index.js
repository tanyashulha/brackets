module.exports = function check(str, bracketsConfig) {
    var stack = [];
    bracketsConfig = bracketsConfig.reduce((acc,v) => {
        acc[v[0]] = v[1];
        return acc;
    },{});
  
    for (var i = 0; i < str.length; i++) {
        for (var key in bracketsConfig) {
          if (key === bracketsConfig[key] && stack.length && stack[stack.length - 1] === key) {
              stack.pop();
              continue;
            }
    
            if ( str[i] === key ) {
                stack.push(str[i]);
                break;
            }
    
            if (str[i] === bracketsConfig[key]) {
                if (stack[stack.length-1] === key) {
                    stack.pop();
                    break;
                } 
                else {
                    return false;
                }
            }
        }
      
      }
    return !stack.length;
};
