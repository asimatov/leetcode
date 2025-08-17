import java.util.Stack;

class Solution {
	public static void main(String[] args) {
		record TestCase(String input, boolean expected) {}
		
		TestCase[] tests = {
				new TestCase("()", true),
				new TestCase("()[]{}", true),
				new TestCase("(]", false),
				new TestCase("([])", true),
				new TestCase("([)]", false)
		};
		
		Solution s = new Solution();
		for(TestCase t : tests) {
			boolean result = s.isValid(t.input());
			assert t.expected() == result : String.format("isValid(%s) == %b, expected %b", t.input(), result, t.expected()); 
		}
		
	}
	
    public boolean isValid(String s) {
    	Stack<Character> stack = new Stack<>();
    	for(char c : s.toCharArray()) {
    		if(c == '(' || c == '[' || c == '{')
    			stack.add(c);
    		else if(stack.empty())
    			return false;
    		if(c == ')' && stack.pop() != '(') 
    			return false;
    		else if(c == ']' && stack.pop() != '[') 
    			return false;
    		else if(c == '}' && stack.pop() != '{')
    			return false;
    	}
        return stack.isEmpty();
    }
}
