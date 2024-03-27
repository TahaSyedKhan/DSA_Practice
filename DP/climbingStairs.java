class Solution {
    public static int[] dp;
    public static int f(int n) {
        if (n == 1) return 1;
        if(n == 0) return 1;
        if(dp[n] != -1) return dp[n];
        int ans = f(n - 1) + f(n - 2);
        return dp[n] = ans;
    }
    public int climbStairs(int n) {
        dp = new int[50];
        Arrays.fill(dp, -1);
        int ans = f(n);
        return ans;
    }
}