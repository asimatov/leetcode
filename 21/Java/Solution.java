public class Solution {
    public static void main(String[] args) {
        record TestCase(int[] list1, int[] list2, int[] expected) {}

        TestCase[] tests = new TestCase[] {
            new TestCase(new int[]{1,2,4}, new int[]{1,3,4}, new int[]{1,1,2,3,4,4}),
            new TestCase(new int[]{}, new int[]{}, new int[]{}),
            new TestCase(new int[]{}, new int[]{0}, new int[]{0})
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
        	ListNode list1 = buildNodes(t.list1());
        	ListNode list2 = buildNodes(t.list2());
            ListNode expected = buildNodes(t.expected());
            String sList1 = list1==null?"null":list1.toString();
            String sList2 = list2==null?"null":list2.toString();
        	ListNode result = s.mergeTwoLists(list1, list2);

        	String sResult = result==null?"":result.toString(), sExpected = expected==null?"":expected.toString();
			assert  sResult.equals(sExpected) : String.format("mergeTwoLists(%s, %s) == %s, expected %s", sList1, sList2, sResult, sExpected); 
        }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    	ListNode head = null;
        ListNode tail = null;
        
        while(list1 != null || list2 != null) {

	        if(list1 == null && list2 != null) {
	        	if(tail != null) tail.next = list2;
	        	tail = list2;
	        	list2 = list2.next;
	        }
	        else if(list2 == null && list1 != null) {
	        	if(tail != null) tail.next = list1;
	        	tail = list1;
	        	list1 = list1.next;
	        }        
	        else if(list1.val <= list2.val) {
	        	if(tail != null) tail.next = list1;
	        	tail = list1;
	        	list1 = list1.next;
	        } else {
	        	if(tail != null) tail.next = list2;
	        	tail = list2;
	        	list2 = list2.next;
	        }
	        
	        if(head == null)
	        	head = tail;
        }
                
        return head;
    }

    public static ListNode buildNodes(int... v) {
    	if(v==null || v.length==0) return null;
    	
        ListNode head = new ListNode(v[0]);
        ListNode current = head;

        for(int i=1; i<v.length; i++) {
            current.next = new ListNode(v[i]);
            current = current.next;
        }

        return head;
    }
}
