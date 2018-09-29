/**
 * https://leetcode.com/problems/count-primes/description/
 */

/**
 * @TODO 可以优化
*/
var countPrimes = function(n) {
  const isPrime = n => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i === 1) continue;
    if (i !== 2 && i % 2 === 0) continue;
    if (i !== 3 && i % 3 === 0) continue;
    if (i !== 5 && i % 5 === 0) continue;
    if (isPrime(i)) count++;
  }
  return count;
};
