from math import *

def calculate_n_primes(n):

	primes = []
	prime_candidate = 1
	global its_a_prime
	its_a_prime = True

	while len(primes) < (n + 1):
		prime_candidate = prime_candidate + 1
		divisor = 1
		while divisor < prime_candidate-1:
			its_a_prime = True
			divisor = divisor + 1
			if prime_candidate % divisor == 0:
				its_a_prime = False
				break

		if its_a_prime == True:
			primes.append(prime_candidate)

	return primes


def calculate_nth_prime(n):

	primes = calculate_n_primes(n)
	return primes[n-1]


print "The 10001st prime is "+ str(calculate_nth_prime(10001))