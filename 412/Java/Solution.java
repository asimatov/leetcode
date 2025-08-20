import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static void main(String[] args) {
        record TestCase(int input, List<String> expected) {}

        TestCase[] tests = new TestCase[] {
            new TestCase(3, List.of("1","2","Fizz")),
            new TestCase(5, List.of("1","2","Fizz","4","Buzz")),
            new TestCase(15, List.of("1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"))
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
        	List<String> result = s.fizzBuzz(t.input());
			assert result.equals(t.expected()) : String.format("fizzBuzz(%s) == %s, expected %s", t.input(), result.toString(), t.expected().toString()); 
        }

    }

    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();

        for(int i=1; i<=n; i++) {
            boolean div3 = i % 3 == 0;
            boolean div5 = i % 5 == 0;
            
            String r = "";
            if(div3) r += "Fizz";
            if(div5) r += "Buzz";
            if(r.isEmpty()) r += String.valueOf(i);
            
            result.add(r);
        }

        return result;
    }
}
