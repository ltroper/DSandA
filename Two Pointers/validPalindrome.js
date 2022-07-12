const isPalindrome = function(s) {

    const upper = s.toUpperCase()

    let alpha = [
        "A", "B", "C", "D", "E",
        "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O",
        "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y",
        "Z", "1", "2", "3", "4",
        "5", "6", "7", "8", "9", "0"
    ]

    let left = 0
    let right = s.length-1

    while (left < right){
        while (!alpha.includes(upper[left]) && left < upper.length) left++
        while (!alpha.includes(upper[right]) && right > -1) right--

        if (upper[left] !== upper[right]) return false
        else {
            left ++
            right --
        }

    }
    return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
console.log(isPalindrome(".,"))
