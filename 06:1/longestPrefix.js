var longestCommonPrefix = function(strs) {
    let output = ""

    for (let i = 0; i < strs[0].length; i++){
        let char = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] !== char){
                return output
            }
        }
        output += char
    }

    return output
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
