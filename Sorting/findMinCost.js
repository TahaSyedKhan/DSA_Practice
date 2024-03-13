function findMinCost(arr) {
    let totalSum = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        totalSum += arr[i];
    }
    totalCost = 0;
    arr.sort((a , b) => b - a);
    for(let i = 0; i < n; i++) {
        totalCost += totalSum;
        totalSum -= arr[i];
    }
    return totalCost;
}

console.log(findMinCost([1, 2, 3]));