const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

    const dfs = (r, c) => {
        // Check boundaries and water cells
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 'W') {
            return;
        }
        // Mark the cell as visited by converting 'L' to 'W'
        grid[r][c] = 'W';

        // Explore all four directions
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    let islandCount = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 'L') { // Found a new island
                islandCount += 1;
                dfs(row, col); // Visit all connected land cells
            }
        }
    }

    return islandCount;


};

module.exports = getTotalIsles;
