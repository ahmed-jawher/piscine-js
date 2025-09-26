// Implement utilities using Array.prototype.reduce

function adder(arr, init = 0) {
  return arr.reduce((acc, n) => acc + Number(n), Number(init));
}

function sumOrMul(arr, init = 0) {
  return arr.reduce((acc, n) => {
    const v = Number(n);
    return v % 2 === 0 ? acc * v : acc + v;
  }, Number(init));
}

function funcExec(arr, init) {
  const hasInit = arguments.length > 1;
  return arr.reduce((acc, fn, idx) => {
    if (typeof fn !== 'function') return acc;
    return idx === 0 && !hasInit ? fn() : fn(acc);
  }, hasInit ? init : undefined);
}

