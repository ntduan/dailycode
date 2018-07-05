export default (a, b) => f => f(a, b);

export const car = f => f((a, b) => a);

export const cdr = f => f((a, b) => b);
