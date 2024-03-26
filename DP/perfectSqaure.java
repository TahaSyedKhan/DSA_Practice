class Solution {
    public static int[] ps;
    public static int[] dp;
    public static int f(int n) {
        if(n < 0) return Integer.MAX_VALUE;
        if(n == 0) return 0;

        
        int ans = Integer.MAX_VALUE;
        if(dp[n] != -1) return dp[n];
        for(int i = 0; i < ps.length; i++) {
            if(n >= ps[i]) {
            ans = Math.min(ans, f(n - ps[i]));
            } else {
                break;
            }
        }


        if(ans == Integer.MAX_VALUE) return dp[n] = Integer.MAX_VALUE;


        return dp[n] = 1 + ans;


    }
    public int numSquares(int n) {
        ps = new int[100];
        int j = 0;
        for(int i = 1; i*i <= 10000; i++ ) {
            ps[j] = i*i;
            j++;
        }
        dp = new int[10005];
        Arrays.fill(dp, -1);
        int ans = f(n);
        return ans;
    }
}