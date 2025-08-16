export function threeSum(nums: number[]): number[][] {
    const results: number[][] = [];
    let len = nums.length;

    if (len < 3) return [];
    nums = nums.sort((a,b)=>a-b);

    if(nums[0]>0 || nums[len-1]<0) return [];

    for(let i=0; i<len-2; i++) {

        if(nums[i]>0) break;

        if(i>0 && nums[i-1]==nums[i]) continue;

        let l = i + 1;
        let r = len - 1;

        while(l<r) {    
            let sum = nums[i] + nums[l] + nums[r];
            if(sum<0) {
                l++;
                while(l<r && nums[l-1]==nums[l]) l++;
            }
            else if(sum>0) {
                r--;
                while(l<r && nums[r]==nums[r+1]) r--;
            }
            else if(sum===0) {
                results.push([nums[i], nums[l], nums[r]]);
                l++;
                while(l<r && nums[l-1]==nums[l]) l++;
                r--;
                while(l<r && nums[r]==nums[r+1]) r--;
            }
        }
    }

    return results;
};