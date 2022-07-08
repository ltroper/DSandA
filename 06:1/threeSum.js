var threeSum = function (nums) {
    const sorted = nums.sort(function(a, b){return a - b})
    const output = []


    for (let i = 0; i < sorted.length - 2; i++) {
        if (i === 0 || (i > 0 && sorted[i] !== sorted[i - 1])) {
            let lower = i + 1
            let higher = sorted.length - 1

            while (lower < higher) {
                const currentSum = sorted[i] + sorted[lower] + sorted[higher];
                if (currentSum === 0) {
                    output.push([sorted[i], sorted[lower], sorted[higher]])
                    while (sorted[lower] === sorted[lower + 1]) lower++
                    while (sorted[higher] === sorted[higher - 1]) higher--
                    lower++
                    higher--
                }

                else if (currentSum < 0) {
                    lower++
                } else if (currentSum > 0) {
                    higher--
                }
            }

        }
    }



    return output
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))

// threeSum = function(array) {
//     array.sort((a,b) => a - b);
//    const triplets = [];

//    for(let i=0; i < array.length - 2; i++){
//        if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
//            let left = i + 1;
//          let right = array.length - 1;

//            while (left < right){
//                const currentSum = array[i] + array[left] + array[right];
//                if (currentSum === 0){
//                    triplets.push([array[i], array[left], array[right]]);
//                    while(array[left] == array[left + 1]) left ++
//                    while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
//                    left ++;
//                    right --;
//                } else if(currentSum < 0) {
//                    left ++
//                } else if(currentSum > 0){
//                    right --
//                }
//            }
//        }
//    }
//    return triplets
