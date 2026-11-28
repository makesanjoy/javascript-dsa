# Linked Lists

A linked list is a linear collection of nodes connected by references. Unlike an array, it does not require contiguous storage or provide constant-time indexed access.

```js
function Node(val) {
    this.val = val;
    this.next = null;
}
const head = new Node(10);
head.next = new Node(20);
```

```text
head → 10 → 20 → null
```

- **Singly linked:** each node has `val` and `next`.
- **Doubly linked:** each node also has `prev`, supporting backward traversal.
- **Circular:** the last node links back to the first instead of null (in a nonempty list).
- `head` references the first node; an optional `tail` references the last. `size` tracks node count.

## Basic operations

Traversal visits each node without moving the stored head:

```js
for (let current = head; current !== null; current = current.next) {
    console.log(current.val);
}
```

Insert after a known node (save the remainder before replacing the link):

```js
const newNode = new Node(15);
newNode.next = head.next;
head.next = newNode;
// 10 → 15 → 20 → null
```

Delete after a known node, when a successor exists:

```js
if (head.next !== null) head.next = head.next.next;
// 10 → 20 → null
```

Insert at the head with `newNode.next = head; head = newNode;`. Delete a nonempty head with `head = head.next;` (assuming a mutable head variable).

## Complexity comparison

| Operation | Dynamic array | Singly linked list (head only) |
| --- | --- | --- |
| Indexed access | O(1) | O(n) |
| Search by value | O(n) | O(n) |
| Insert/delete at head | O(n) | O(1) |
| Append | O(1) amortized | O(n) |
| Insert/delete after known node | O(n) worst case | O(1) |
| Total storage | O(n) | O(n) |

Linked list operations above use O(1) auxiliary space. Each node requires O(1) storage. A tail reference makes append O(1), but deleting the tail still requires finding its predecessor in a singly linked list. Arrays typically have better locality and less per-element reference overhead; these are conventional algorithmic costs, not guarantees of every JavaScript engine.

## When to use

Use linked lists for frequent insertion/removal at known positions, queues with head and tail references, and doubly linked structures such as LRU caches paired with a map. Prefer arrays when frequent indexed access or cache locality matters.

See [Design Linked List](design-linked-list.md) and [interview patterns](linked-list-patterns.md).
