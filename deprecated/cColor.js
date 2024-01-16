import { colorInitials } from '../const.js';

export const cColor = function cColor(text, initial) {
  const n1 = { 2: 3, 3: 9 };
  const n2 = colorInitials;

  function _num(i) {
    return `${n1[i.length] + (i[0] === 'B')}${n2.indexOf(i.at(-1))}`;
  }

  function _code(n, t) {
    return `\x1b[${n.join(';')}m${t}\x1b[0m`;
  }

  const nums = [];

  if (typeof initial === 'string' && initial) nums.push(_num(initial));
  else if (typeof initial === 'object') {
    for (const i1 in initial) {
      nums.push(_num(i1 + initial[i1]));
    }
  }

  return nums.length ? _code(nums, text) : text;
};
