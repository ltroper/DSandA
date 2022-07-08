
const numDecodings = function(s) {
    if (parseInt(s[0]) === 0 ) return 0
    if (s.length === 1) return 1
    if (parseInt(s.slice(0,2)) < 27) return 2

    let res

    for (let i = 0; i < s.length; i++){
        let first = numDecodings(s[i])
        let second = 0
        if (s[i+1] !== undefined) {
            second = numDecodings(s[i]+s[i+1])
        }
        res = first + second
    }


    return res
};

console.log(numDecodings("123"))
