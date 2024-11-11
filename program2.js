const decodeTheRing = function (s, p) {
// Memoization object to store results of subproblems
    const memo = {};

    const match = (i, j) => {
        // Check if the result is already calculated
        const key = `${i},${j}`;
        if (key in memo) return memo[key];

        // Base cases
        if (j === p.length) {
            // True if both strings are fully matched
            return i === s.length;
        }

        if (i === s.length) {
            // Only matches if the remaining pattern is all '*'
            memo[key] = p.slice(j) === '*'.repeat(p.length - j);
            return memo[key];
        }

        // Matching logic
        if (p[j] === '*') {
            // '*' can match zero or more characters in `s`
            memo[key] = match(i + 1, j) || match(i, j + 1);
        } else if (p[j] === '?' || p[j] === s[i]) {
            // '?' can match a single character, or exact character match
            memo[key] = match(i + 1, j + 1);
        } else {
            // No match if characters differ and no wildcard applies
            memo[key] = false;
        }

        return memo[key];
    };

    return match(0, 0);



  };
  
  module.exports = decodeTheRing;
