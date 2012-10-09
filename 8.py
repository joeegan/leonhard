import sieve_of_atkin

global result
result = []

def prime_factors(N):
	primes = sieve_of_atkin.atkins13(2000000)
	i = 0
	while i < len(primes)-1 and i < N:
		factorial_candidate = primes[i]
		divided = N/factorial_candidate
		i += 1
		if (N % factorial_candidate == 0):
			result.append(factorial_candidate)
			prime_factors(divided)
			break
	return result

print(prime_factors(600851475143))

