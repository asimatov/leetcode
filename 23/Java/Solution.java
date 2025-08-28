import java.util.Map;
import java.util.TreeMap;

public class Solution {
    public static void main(String[] args) {
        record TestCase(int[][] lists, int[] expected) {}

        TestCase[] tests = new TestCase[] {
            new TestCase(new int[][]{{1,4,5},{1,3,4},{2,6}}, new int[]{1,1,2,3,4,4,5,6}),
            new TestCase(new int[][]{}, new int[]{}),
            new TestCase(new int[][]{{}}, new int[]{})
        };

        Solution s = new Solution();
        for(TestCase t : tests) {
        	ListNode[] lists = new ListNode[t.lists().length];
        	int i = 0;
        	for(int[] l : t.lists()) {
        		lists[i++] = buildNodes(l);
        	}
        	StringBuilder sLists = new StringBuilder();
        	for(ListNode l : lists) {
        		sLists.append(l).append(" ");
        	}
        	
        	ListNode expected = buildNodes(t.expected());
        	String sExpected = expected==null?"":expected.toString();
      	
        	ListNode result = s.mergeKLists(lists);
        	String sResult = result==null?"":result.toString();
        	
			assert  sResult.equals(sExpected) : String.format("mergeKLists(%s) == %s, expected %s", sLists.toString(), sResult, sExpected); 
        }
    }

    public ListNode mergeKLists(ListNode[] lists) {
        Map<Integer, NodePair> map = new TreeMap<>();
        
        for(ListNode node : lists) {
        	while(node != null) {
        		if(map.containsKey(node.val))
        		{
        			map.get(node.val).getTail().next = node;
        			map.get(node.val).setTail(node);
        		} else {
        			map.put(node.val, new NodePair(node, node));
        		}
    			
        		node = node.next;
        	}
        }
        
    	ListNode head = null, lastTail = null;
        for(Map.Entry<Integer, NodePair> me : map.entrySet() ) {
        	if(head == null || head.val > me.getValue().getHead().val) 
        		head = me.getValue().getHead();
        	
        	if(lastTail!=null) lastTail.next = me.getValue().getHead();
        	lastTail = me.getValue().getTail();
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