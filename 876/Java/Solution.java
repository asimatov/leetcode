public class Solution {
    public static void main(String[] args) {
        record TestCase(ListNode input, ListNode expected) {}

        ListNode[] test1 = buildNodes(1,2,3,4,5);
        ListNode[] test2 = buildNodes(1,2,3,4,5,6);
        TestCase[] tests = new TestCase[] {
            new TestCase(test1[0], test1[2]),
            new TestCase(test2[0], test2[3])
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
        	ListNode result = s.middleNode(t.input());
			assert result == t.expected() : String.format("middleNode(%s) == %s, expected %s", t.input(), result, t.expected()); 
        }

    }

    public static ListNode[] buildNodes(int... v) {
        ListNode[] nodes = new ListNode[v.length];
        ListNode head = new ListNode(v[0]);
        ListNode current = head;
        nodes[0] = current;

        for(int i=1; i<v.length; i++) {
            current.next = new ListNode(v[i]);
            nodes[i] = current.next;
            current = current.next;
        }

        return nodes;
    }

    public ListNode middleNode(ListNode head) {
        int k = 0;
        ListNode middle = head;
        while(head != null) {
            k++;
            if(k % 2 == 0) 
                middle = middle.next;
            head = head.next;
        }
        return middle;
    }
}
