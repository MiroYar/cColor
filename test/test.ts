import { cColor } from '../index.js';

const text = 'The SGR parameters 30–37 selected the foreground color, while 40–47 selected the background.';

console.log(cColor(text, 'FB'));
console.log(cColor(text, 'BBG'));
console.log(cColor(text, { F: 'B', B: 'BG' }));
