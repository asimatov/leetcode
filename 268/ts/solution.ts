export function missingNumber(nums: number[]): number {
    const range = {min: nums[0]?nums[0]:0, max: nums[0]?nums[0]:0}
    const expected = [0];

    for(let i=0; i<nums.length; i++) {
        if(nums[i]<range.min) {
            for(let j=nums[i]+1; j<range.min; j++)
                expected.push(j);
            range.min = nums[i];
        }
        if(nums[i]>range.max) {
            for(let j=range.max+1; j<nums[i]; j++)
                expected.push(j);
            range.max = nums[i];
        }

        if(expected.includes(nums[i]))
            expected.splice(expected.indexOf(nums[i]), 1)

    }

    return expected.length>0?expected[0]:(range.max+1);
};