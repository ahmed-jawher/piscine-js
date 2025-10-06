// flow: compose functions left-to-right like lodash _.flow
// Usage: const f = flow([fn1, fn2, fn3]); f(a,b) -> fn3(fn2(fn1(a,b)))
export const flow = (funcs = []) => {
  if (!Array.isArray(funcs)) throw new TypeError('flow expects an array');
  const list = funcs.slice();
  return (...args) => {
    if (list.length === 0) return args[0];
    let acc = list[0](...args);
    for (let i = 1; i < list.length; i++) {
      acc = list[i](acc);
    }
    return acc;
  };
};

