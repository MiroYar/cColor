export const colorInitials = ['D', 'R', 'G', 'Y', 'B', 'M', 'C', 'W'];

const cColor = function cColor(text, flag) {
  const n1 = { 2: 3, 3: 9 };
  const n2 = colorInitials;

  function _num(f) {
    return `${n1[f.length] + (f[0] === 'B')}${n2.indexOf(f.at(-1))}`;
  }

  function _code(f) {
    return `\x1b[${_num(f.toUpperCase())}m`;
  }

  let code = '';

  if (typeof flag === 'string' && flag) code = _code(flag);
  else if (typeof flag === 'object') {
    for (const f1 in flag) {
      code += _code(f1 + flag[f1]);
    }
  }

  return code ? `${code + text}\x1b[0m` : text;
};

export default cColor;
