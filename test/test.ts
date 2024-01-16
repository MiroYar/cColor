import { CColor } from '../src/index.js';

import { text } from './text';

const cColor = new CColor();

console.log(cColor.print(text, 'FB'));
console.log(cColor.print(text, 'BBG'));
console.log(cColor.print(text, { F: 'B', B: 'BG' }));
