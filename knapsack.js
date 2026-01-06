export const getKnap = (weights, values, capacity) => {
	let n = weights.length;
	return knapsack(weights, values, capacity, n);
}

function knapsack(weights, values, capacity, n) {
	if (n == 0 || capacity == 0)
		return 0;
	if (weights[n - 1] <= capacity) {
		return Math.max(
			values[n - 1] + knapsack(weights, values, capacity - weights[n - 1], n - 1),
			knapsack(weights, values, capacity, n - 1)
		);
	}
	else {
		return knapsack(weights, values, capacity, n - 1);
	}
}