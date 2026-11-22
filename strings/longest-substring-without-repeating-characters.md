# Longest Substring Without Repeating Characters — LeetCode 3

**Problem:** [LeetCode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
**Pattern:** Variable-Size Sliding Window + Hash Map
**Implementation:** [JavaScript Solution](longest-substring-without-repeating-characters.js)

## Problem

Given a string `s`, find the length of its longest substring without repeating characters.

**Example:**

```javascript
s = "abcabcbb"
// Output: 3
```

The substring `"abc"` contains three distinct characters.

## Approach

Maintain a sliding window using `left` and `right`.

1. Expand the window by processing the character at `right`.
2. Use a Map to track each character's most recent index.
3. If a repeated character is inside the current window, move `left` past its previous occurrence.
4. Update the character's index and the maximum window length.

The condition `lastSeen.get(char) >= left` prevents the left pointer from moving backward.

## Complexity Analysis

- **Time:** `O(n)` — Each character is processed once.
- **Auxiliary Space:** `O(min(n, m))` — The Map stores at most one entry per distinct character, where `m` is the alphabet size. This is `O(1)` for the problem's fixed character set.

## Edge Cases

- Empty string: return `0`.
- All identical characters: return `1`.
- All distinct characters: return the string length.
- A repeated character outside the current window must not move `left` backward.

## Key Learning

A variable-size sliding window can shrink by jumping the left pointer directly past a duplicate, avoiding unnecessary repeated scans.
