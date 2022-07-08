var isPalindrome = function(x) {
        if (x < 1) return false

        let i = 0
        let end = x.toString().length-1
        while (i <= end){
            if(x.toString()[i] === x.toString()[end]){
                i++
                end--
            }
            else return false
        }
        return true

};

console.log(isPalindrome(100))
