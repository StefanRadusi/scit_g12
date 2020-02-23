// is easier to understand if you take pice of paper and try to work trough the function instruction with values
export function factorialRecursive(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
}
