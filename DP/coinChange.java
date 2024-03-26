class Solution {
    public static int[] c;
    public static int[] dp;
    public static int f(int amount) {
        if(amount < 0) return Integer.MAX_VALUE;
        if(amount == 0) return 0;

        int n = c.length;
        int ans = Integer.MAX_VALUE;
        if(dp[amount] != -1) return dp[amount];
        for(int i = 0; i < n; i++) {
            if(amount >= c[i]) {
            ans = Math.min(ans, f(amount - c[i]));

            }
        }


        if(ans == Integer.MAX_VALUE) return dp[amount] = Integer.MAX_VALUE;


        return dp[amount] = 1 + ans;


    }
    public int coinChange(int[] coins, int amount) {
        c = coins;
        dp = new int[10005];
        Arrays.fill(dp, -1);
        int ans = f(amount);
        return (ans == Integer.MAX_VALUE) ? -1 : ans;
    }
}
