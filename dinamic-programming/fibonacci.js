// the normal recursion solution
function fib(n) {
	if(n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}

// a memo-ized solution
function fibo(n, memo=[]) {
	if(memo[n] !== undefined) return memo[n];
	if(n <= 2) return 1;
	var res = fibo(n-1, memo) + fibo(n-2, memo);
	memo[n] = res;
	return res;
}