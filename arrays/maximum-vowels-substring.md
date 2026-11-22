# Maximum Number of Vowels in a Substring of Given Length — LeetCode 1456

**Problem:** [LeetCode 1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)  
**Pattern:** Fixed-Size Sliding Window  
**Implementation:** [JavaScript Solution](maximum-vowels-substring.js)

## Problem

Given a string `s` and an integer `k`, find the maximum number of vowels in any contiguous substring of length `k`.

**Example:**

```javascript
s = "abciiidef"
k = 3

// Output: 3
```

The substring `"iii"` contains three vowels.

## Approach

Use a fixed-size sliding window to track the number of vowels in each substring of length `k`.

1. Store the five vowels in a `Set` for constant-time membership checks.
2. Count vowels in the first `k` characters.
3. Slide the window one position at a time.
4. Increment the count if the incoming character is a vowel.
5. Decrement the count if the outgoing character is a vowel.
6. Track the maximum count across all windows.

Return immediately when the maximum reaches `k`, since a window cannot contain more than `k` vowels.

## Complexity Analysis

- **Time:** `O(n)` — Each character is processed a constant number of times.
- **Auxiliary Space:** `O(1)` — The vowel set has a fixed size of five, and only a constant number of variables are maintained.

## Edge Cases

- `k = 1`: Each character forms an individual window.
- `k = s.length`: The entire string forms one window.
- No vowels: The result is `0`.
- All vowels: The result is `k`.

## Implementation Details

For each incoming index `i`:

- `s[i]` represents the incoming character.
- `s[i - k]` represents the outgoing character.
- `vowelCount` tracks vowels in the current window.
- `maxVowels` stores the highest count encountered.

The window maintains a constant length while updating its vowel count in constant time.
