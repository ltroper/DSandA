const hammingWeight = function (n) {
    let count = 0

    while (n > 0) {
        count += n % 2
        n = n >> 1
    }

    return count

    // let countOf1 = 0;
    // let arrOfN = n.toString(2)
    // for (i = 0; i < arrOfN.length; i++) {
    //     if (arrOfN[i] === "1") {
    //         countOf1++;
    //     }
    // }
    // return countOf1;
};

console.log(hammingWeight(11111111111111111111111111111101))
