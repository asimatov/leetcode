export function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>(); //key is value from original nums[], value - index from nums[]

    for(let i=0; i<nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - nums[i];

        if(numsMap.has(num2)) {
            let num2Index = numsMap.get(num2)!;
            return [num2Index, i];
        }

        numsMap.set(num1, i);
    }

    throw new Error("No valid pair found.");
}