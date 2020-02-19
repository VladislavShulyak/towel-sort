// You should implement your task here.

module.exports = function towelSort(matrix) {
    let nums = [];
    if (!matrix) {
        return nums;
    }

    for (let i = 1; i < matrix.length + 1; i++) {
        let temp = matrix[i - 1];
        if (i % 2 === 0) {
            temp.reverse();
            nums = nums.concat(temp);
        } else nums = nums.concat(temp);
    }
    return nums;

};
