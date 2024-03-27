class Solution {
    public static int[] dp;
    public static int f(int n, int[] nums) {
        if(n == 0) return nums[n];
        if(n < 0) return 0;
        if(dp[n] != -1) return dp[n];
        int pick = nums[n] + f(n-2, nums);
        int notPick = 0 + f(n-1, nums);
        return dp[n] = Math.max(pick, notPick);
    }
    public int rob(int[] nums) {
        dp = new int[100];
        Arrays.fill(dp, -1);
        int n = nums.length;
        return f(n-1, nums);
    }
}
