const isAnagram = function(s, t) {

    const arrayS = s.split("").sort()
    const arrayT = t.split("").sort()

    if (arrayS.length !== arrayT.length) return false

    for (let i = 0; i < arrayS.length; i++){
        if (arrayS[i] !== arrayT[i]) return false
    }

    return true
};



const groupAnagrams = function(strs) {
    let res = []
    res.push([strs.shift()])

    while (strs.length > 0){
        for (let i = 0; i < res.length; i++){
            if (strs[0] === undefined) break
            if (isAnagram(res[i][0], strs[0])){
                res[i].push(strs.shift())
            }
        }
        if (strs.length > 0 && !isAnagram(res[0][0], strs[0])) res.push([strs.shift()])
    }

    return res
};

let Astrs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(Astrs))
console.log(groupAnagrams(["",""]))
console.log(groupAnagrams(["","",""]))
