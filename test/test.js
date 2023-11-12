import { cColor } from '../index.js';

console.log(cColor('test', 'FBM'));
console.log(cColor('test', { F: 'M', B: 'B' }));
console.log('\x1b[44;35mTEST\x1b[0m');
console.log('\x1b[35;44mTEST\x1b[0m');
