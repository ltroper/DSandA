const isAnagram = function(s, t) {

    const arrayS = s.split("").sort()
    const arrayT = t.split("").sort()

    if (arrayS.length !== arrayT.length) return false

    for (let i = 0; i < arrayS.length; i++){
        if (arrayS[i] !== arrayT[i]) return false
    }

    return true
};


console.log(isAnagram("cat", "act"))
console.log(isAnagram("cat", "bbt"))
console.log(isAnagram("cast", "acts"))
