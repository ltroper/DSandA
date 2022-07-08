const reverseBits = function (n) {

    let res = 0

    for (let i = 0; i < 32; i++) {
        let bit = (n >> i) & 1
        res = res | (bit << (31 - i))
    }

    return res
};

console.log(reverseBits(00000010100101000001111010011010))
