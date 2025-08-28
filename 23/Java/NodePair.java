public class NodePair {
	private ListNode head; 
	private ListNode tail;
	
	public NodePair(ListNode head, ListNode tail) {
		this.setHead(head);
		this.setTail(tail);
	}

	public ListNode getHead() {
		return head;
	}

	public void setHead(ListNode head) {
		this.head = head;
	}

	public ListNode getTail() {
		return tail;
	}

	public void setTail(ListNode tail) {
		this.tail = tail;
	}
}