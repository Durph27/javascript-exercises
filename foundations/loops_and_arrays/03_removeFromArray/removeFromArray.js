const removeFromArray = function(arr, ...nums) {
    for (const num of nums) {
        index = arr.findIndex(item => item === num)
        while (index != -1) {
            arr.splice(index, 1)
            index = arr.findIndex(item => item == num)
        }
    }
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
