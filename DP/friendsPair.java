class friendsPair {
    public static int[] dp;

    public static int f(int n) { 
        if(n == 0 || n == 1 || n ==2) return n;

        if(dp[n] != -1) return dp[n];
        return dp[n] = f(n - 1) + (n - 1)*f(n - 2);
    }
    public static int FP(int n) {
        dp = new int[10005];
        Arrays.fill(dp, -1);
        return f(n);
    }

}