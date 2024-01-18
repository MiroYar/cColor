import { colorInitials, brightnessIndex } from './const.js';
export class CColor {
    #n1 = brightnessIndex;
    #n2 = colorInitials;
    //@ts-ignore
    #num = (i) => `${this.#n1[Number(i.length)] + Number(i[0] === 'B')}${this.#n2.indexOf(i.at(-1))}`;
    #code = (n, t) => `\x1b[${n.join(';')}m${t}\x1b[0m`;
    print = (text, initial) => {
        const nums = [];
        if (typeof initial === 'string' && initial)
            nums.push(this.#num(initial));
        else if (typeof initial === 'object') {
            for (const i1 in initial) {
                nums.push(this.#num((i1 + initial[i1])));
            }
        }
        return nums.length ? this.#code(nums, text) : text;
    };
}
