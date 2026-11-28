# Linked List Interview Patterns

Recognize the required pointer relationships before writing code. These are practice references, not a claim that every pattern has been mastered.

| Pattern | Recognition clue | Practice | Typical time / auxiliary space |
| --- | --- | --- | --- |
| Traversal and rewiring | Insert, delete, access by index | [707 Design Linked List](https://leetcode.com/problems/design-linked-list/) (Medium) | O(n) / O(1) |
| Previous/current/next | Reverse links | [206 Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) (Easy) | O(n) / O(1) iterative |
| Slow/fast pointers | Middle or cycle | [876 Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) (Easy), [141 Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) (Easy) | O(n) / O(1) |
| Dummy head | Head may change; simplify deletion or merge | [203 Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) (Easy) | O(n) / O(1) |
| Merge pointers | Two sorted lists | [21 Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) (Easy) | O(m+n) / O(1) iterative, reusing nodes |
| Fixed pointer gap | Nth node from end | [19 Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) (Medium) | O(n) / O(1) |
| Pointer switching | Shared node identity | [160 Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) (Easy) | O(m+n) / O(1) |
| Split and merge | Sort a linked list | [148 Sort List](https://leetcode.com/problems/sort-list/) (Medium) | O(n log n) / O(log n) recursive stack; O(1) iterative bottom-up |

Here n and m are list lengths. Complexities describe the indicated iterative or recursive approaches, not every possible solution.

## Reusable pointer templates

Traversal: `for (let curr = head; curr !== null; curr = curr.next) { /* visit */ }`

Slow/fast traversal (acyclic list):

```js
let slow = head, fast = head;
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}
```

Dummy node: `const dummy = new Node(0); dummy.next = head;` Work from dummy when the first real node might change; return `dummy.next` when done.

## Tips and common mistakes

- Draw three nodes and label head, current, predecessor and next before changing references.
- Save the next reference before overwriting it, especially during reversal.
- To insert or delete at index i, generally stop at i - 1, except for head operations.
- Check a reference before accessing its next property. For a two-step pointer, check both `fast` and `fast.next`.
- Compare node identity with `===`, not node values, for intersection and cycle problems.
- Move a local traversal pointer, not the stored head, unless the algorithm intentionally changes head.
- Keep size and optional tail consistent. Avoid losing the remainder of the chain or accidentally creating a cycle.
- Test empty, singleton, two-node, head/tail, duplicate-value and invalid-index cases when applicable.
- Count recursion stack space; recursive traversal is generally O(n) auxiliary space.
- Prefer O(1) pointer rewiring when possible rather than copying values into an array.
