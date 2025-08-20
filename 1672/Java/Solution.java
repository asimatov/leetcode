import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        record TestCase(int[][] input, int expected) {}

        TestCase[] tests = new TestCase[] {
            new TestCase(new int[][]{{1,2,3},{3,2,1}}, 6),
            new TestCase(new int[][]{{1,5},{7,3},{3,5}}, 10),
            new TestCase(new int[][]{{2,8,7},{7,1,3},{1,9,5}}, 17)
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
            int result = s.maximumWealth(t.input());
			assert t.expected() == result : String.format("maximumWealth(%s) == %s, expected %s", Arrays.deepToString(t.input()), result, t.expected()); 
        }

    }

    public int maximumWealth(int[][] accounts) {
        int max = 0;
        for(int i=0; i<accounts.length; i++) {
            int sum = 0;
            for(int j=0; j<accounts[i].length; j++) {
                sum += accounts[i][j];
            }
            if(sum>max) max = sum;
        }
        return max;
    }
}
