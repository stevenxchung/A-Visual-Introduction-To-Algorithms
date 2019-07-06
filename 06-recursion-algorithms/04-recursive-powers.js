var power = function(x, n) {
  // base case
  if (n === 0) {
    return 1;
  } else if (n > 0 && n % 2 === 0) {
    // positive and even
    return power(x, n / 2) * power(x, n / 2)
  } else if (n > 0 && n % 2 !== 0) {
    // positive and odd
    return x * power(x, n - 1) 
  } else {
    // negative
    return 1 / power(x, -n);
  }
};
