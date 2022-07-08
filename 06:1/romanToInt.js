var romanToInt = function(s) {
    let output = 0
    let dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = s.length-1; i >=0; i--){
        if (dict[s[i]] > dict[s[i-1]]){
            output += dict[s[i]]
            output -= dict[s[i-1]]
            i --
        }
        else {
            output += dict[s[i]]
        }
    }

    return output
};

console.log(romanToInt("MCMXCIV"))

//('I', 'V', 'X', 'L', 'C', 'D', 'M')
