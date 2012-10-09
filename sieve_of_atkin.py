# borrowed from http://programmingpraxis.com/2010/02/19/sieve-of-atkin-improved/
# for tasks that require fast prime calculation, where prime calculation is not the focus of the question
# i.e. #8

from math import *

def atkins13(limit=1000000):
    '''use sieve of atkins to find primes <= limit.'''
    primes = [0] * limit

    # n = 3x^2 + y^2 section
    xx3 = 3
    for dxx in xrange( 0, 12*int( sqrt( ( limit - 1 ) / 3 ) ), 24 ):
        xx3 += dxx
        y_limit = int(12*sqrt(limit - xx3) - 36)
        n = xx3 + 16
        for dn in xrange( -12, y_limit + 1, 72 ):
            n += dn
            primes[n] = not primes[n]

        n = xx3 + 4
        for dn in xrange( 12, y_limit + 1, 72 ):
            n += dn
            primes[n] = not primes[n]

    # n = 4x^2 + y^2 section
    xx4 = 0
    for dxx4 in xrange( 4, 8*int(sqrt((limit - 1 )/4)) + 4, 8 ):
        xx4 += dxx4
        n = xx4+1

        if xx4%3:
            for dn in xrange( 0, 4*int( sqrt( limit - xx4 ) ) - 3, 8 ):
                n += dn
                primes[n] = not primes[n]

        else:
            y_limit = 12 * int( sqrt( limit - xx4 ) ) - 36

            n = xx4 + 25
            for dn in xrange( -24, y_limit + 1, 72 ):
                n += dn
                primes[n] = not primes[n]

            n = xx4+1
            for dn in xrange( 24, y_limit + 1, 72 ):
                n += dn
                primes[n] = not primes[n]

    # n = 3x^2 - y^2 section
    xx = 1
    for x in xrange( 3, int( sqrt( limit / 2 ) ) + 1, 2 ):
        xx += 4*x - 4
        n = 3*xx

        if n > limit:
            min_y = ((int(sqrt(n - limit))>>2)<<2)
            yy = min_y*min_y
            n -= yy
            s = 4*min_y + 4

        else:
            s = 4

        for dn in xrange( s, 4*x, 8 ):
            n -= dn
            if n <= limit and n%12 == 11:
                    primes[n] = not primes[n]

    xx = 0
    for x in xrange( 2, int( sqrt( limit / 2 ) ) + 1, 2 ):
        xx += 4*x - 4
        n = 3*xx

        if n > limit:
            min_y = ((int(sqrt(n - limit))>>2)<<2)-1
            yy = min_y*min_y
            n -= yy
            s = 4*min_y + 4

        else:
            n -= 1
            s = 0

        for dn in xrange( s, 4*x, 8 ):
            n -= dn
            if n <= limit and n%12 == 11:
                    primes[n] = not primes[n]

    # eliminate squares        
    for n in xrange(5,int(sqrt(limit))+1,2):
        if primes[n]:
            for k in range(n*n, limit, n*n):
                primes[k] = False

    return [2,3] + filter(primes.__getitem__, xrange(5,limit,2))