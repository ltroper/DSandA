const getSum = function(a, b) {
    while (b !== 0){
        let temp = a
        a = a^b
        b = (temp&b) << 1
    }
    return a
};


console.log(getSum(4, -2))
