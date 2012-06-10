function create_odd_list(limit) {
	var list = [];
	var i = 0;
	while (i < limit) {
		if (i % 2) {
			list.push(i);
		}
		i++;
	}
	return list;	
}

function check_for_divisors(prime_candidate) {
	var divisor = 1, 
		is_prime = true;
	while (divisor+2 < prime_candidate) {
		divisor = divisor + 2;
		if (prime_candidate % divisor == 0) {
			is_prime = false;
			break;
		}
	}
	return is_prime;
}

function primes_below(odd_list) {
	var prime_total = 0;
	odd_list.forEach(function(prime_candidate) {
		if (check_for_divisors(prime_candidate)) {
			prime_total += prime_candidate;
		}
	});
	return prime_total;
}

function sum_of_primes_below(limit) {
	var odd_list = create_odd_list(limit);
	odd_list.splice(0, 1, 2);
	primes = primes_below(odd_list);
	return primes;
}

console.log("The primes below 2000000 are "+ sum_of_primes_below(2000000));
