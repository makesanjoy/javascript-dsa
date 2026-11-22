/**
 * LeetCode #1456 — Maximum Number of Vowels in a Substring of Given Length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 * Time: O(n)
 * Auxiliary Space: O(1)
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) vowelCount++;
    }

    let maxVowels = vowelCount;
    if (maxVowels === k) return k;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) vowelCount++;
        if (vowels.has(s[i - k])) vowelCount--;

        maxVowels = Math.max(maxVowels, vowelCount);

        if (maxVowels === k) return k;
    }

    return maxVowels;
};
