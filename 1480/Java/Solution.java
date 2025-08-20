import java.util.Arrays;

class Solution {
	public static void main(String[] args) {
		record TestCase(int[] input, int[] expected) {}
		
		TestCase[] tests = {
				new TestCase(new int[]{1,2,3,4}, new int[]{1,3,6,10}),
				new TestCase(new int[]{1,1,1,1,1}, new int[]{1,2,3,4,5}),
				new TestCase(new int[]{3,1,2,10,1}, new int[]{3,4,6,16,1})
		};
		
		Solution s = new Solution();
		for(TestCase t : tests) {
			int[] result = s.runningSum(t.input());
			assert Arrays.equals(t.expected(), result) : String.format("runningSum(%s) == %s, expected %s", Arrays.toString(t.input()), Arrays.toString(result), Arrays.toString(t.expected())); 
		}
		
	}
	
	public int[] runningSum(int[] nums) {
		int[] result = new int[nums.length];
		int sum = 0;
		for(int i=0; i<nums.length; i++) {
			sum += nums[i];
			result[i] = sum;
		}
		
		return result;
    }
}
