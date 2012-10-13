import sieve_of_atkin

result = []
primes = sieve_of_atkin.atkins13(2000000)

def prime_factors(N):
	i = 0
	while i < len(primes)-1:
		f = primes[i] # 'f' for 'factorial candidate'
		divided = N/f
		i += 1
		if (N % f == 0):
			result.append(f)
			prime_factors(f)
			break
	return result

print(prime_factors(600851475143))