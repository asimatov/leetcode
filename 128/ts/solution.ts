export function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    const skipSet = new Set<number>();
    let maxLength = 0;

    for(let num of nums) {
        if(skipSet.has(num))
            continue;

        if(!numSet.has(num-1)) { // new sequence
            let curNum = num;
            let length = 1;
            skipSet.add(curNum);
            while(numSet.has(curNum+1)) {
                skipSet.add(curNum);
                length++;
                curNum++;
            }
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
}