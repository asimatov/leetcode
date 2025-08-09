
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
    }
}

export function hasCycle(head: ListNode | null): boolean {
    const visited = new Map<ListNode, boolean>();

    if(head === null) return false;

    let current = head;
    while(current !== null) {
        if(visited.has(current))
            return true;
        visited.set(current, true);
        current = current.next!
    }
    return false;
};

export function buildList(values: number[], pos: number = -1): ListNode | null {
    if (values.length === 0) return null;

    const head = new ListNode(values[0]);
    let current = head;
    let cycleNode: ListNode | null = null;

    if (pos === 0) {
        cycleNode = head;
    }

    for (let i = 1; i < values.length; i++) {
        const newNode = new ListNode(values[i]);
        current.next = newNode;
        current = newNode;

        if (i === pos) {
            cycleNode = newNode;
        }
    }

    if (pos >= 0 && cycleNode) {
        current.next = cycleNode;
    }

    return head;
}