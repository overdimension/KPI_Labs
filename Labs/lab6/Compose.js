const composeSafe = (...fns) => {

  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('All arguments must be functions');
  }

  const handlers = [];

  const fn = (x) => {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (e) {
        handlers.forEach(h => h(e));
        return undefined;
      }
    }
    return result;
  };

  fn.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
    return fn;
  };

  return fn;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const bad = () => { throw new Error('Fail'); };

const f = composeSafe(cube, twice, inc);
console.log(f(2));

const g = composeSafe(cube, bad, inc);
g.on('error', e => console.log('Handled:', e.message));
console.log(g(3));