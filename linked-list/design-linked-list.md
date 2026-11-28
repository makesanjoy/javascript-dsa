# 707. Design Linked List

[LeetCode — Medium](https://leetcode.com/problems/design-linked-list/) · [JavaScript implementation](design-linked-list.js)

Maintain `head` and `size`. Every node stores `val` and `next`. The list is zero-indexed. The invariant is that exactly `size` nodes are reachable from `head`, and the last node points to null.

## Operations and examples

| Method | Approach | Worst-case time | Auxiliary space |
| --- | --- | --- | --- |
| Constructor | Initialize empty head and size | O(1) | O(1) |
| get(index) | Validate and advance index steps | O(n) | O(1) |
| addAtHead(val) | Link new node to old head, then update head | O(1) | O(1) |
| addAtTail(val) | Traverse to last node or initialize head | O(n) | O(1) |
| addAtIndex(index, val) | Handle boundaries; traverse to predecessor and splice | O(n) | O(1) |
| deleteAtIndex(index) | Handle head; otherwise bypass target via predecessor | O(n) | O(1) |

`n` is the number of nodes before the operation. Traversal takes at most n steps; only a constant number of references and counters are used. Insertion allocates one node (O(1) additional memory); total list storage is O(n). Head deletion and head insertion are constant-time.

```js
const list = new MyLinkedList();
list.addAtHead(10);       // 10
list.addAtTail(30);       // 10 → 30
list.addAtIndex(1, 20);   // 10 → 20 → 30
list.get(1);             // 20
list.deleteAtIndex(1);   // 10 → 30
list.get(1);             // 30
```

## Key implementation details

- Head insertion: `newNode.next = this.head`, not `this.next = this.head`. The latter changes the list object rather than linking the new node.
- Middle insertion: stop at index - 1, then execute `newNode.next = current.next; current.next = newNode;` in that order.
- Index validation: reject insertion beyond size; insertion at size appends. Nonpositive insertion indices are treated as head insertion defensively; the supplied problem statement does not specify negative insertion behavior.
- Head deletion: index 0, not 1. For other indices, stop at the predecessor and use `current.next = current.next.next`, not `current.next = current.next`.
- Update size exactly once per successful mutation; delegated head/tail methods already update size.

## Edge cases

Empty list, single node, head and tail deletion, insertion at size, insertion beyond size, invalid get/delete, repeated values, and repeated mixed mutations. Invalid operations must leave the list unchanged.

## Optimization

Maintain an additional tail reference for O(1) append. Update both head and tail on transitions between empty and nonempty states and update tail when its node is deleted. Arbitrary indexed access remains O(n). A doubly linked list supports O(1) deletion of a known node at the cost of an extra reference per node.
