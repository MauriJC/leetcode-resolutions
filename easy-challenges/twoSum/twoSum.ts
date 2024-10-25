console.log("two Sum");

const array1: number[] = [2, 7, 11, 15]
const target1: number = 9


function twoSum(nums: number[], target: number): number[] {

    let answer: number[] = []

    nums.forEach((num, index) => {

        for (let i: number = index + 1; i < nums.length; i++) {
            if ((num + nums[i]) == target) {
                console.log(num, nums[i])
                answer = [index, i]
                return answer
            }
        }
    })

    return answer

};

twoSum(array1, target1)