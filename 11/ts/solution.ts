export function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length-1
    let max = 0;

    while(left < right) {

        max = Math.max(max, getVolume(height, left, right));

        if(height[left]<height[right])
            left++;
        else
            right--;
    }
    return max;
};

function getVolume(height: number[], left: number, right: number) {
    return Math.abs(left - right) * Math.min(height[left], height[right]);
}