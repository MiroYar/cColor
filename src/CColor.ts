import { colorInitials, brightnessIndex } from './const.js';

type ColorPosition = 'F' | 'B';
type ColorBaseInitials = (typeof colorInitials)[number];
type ColorBrightInitials = `B${ColorBaseInitials}`;
type ColorInitials = ColorBaseInitials | ColorBrightInitials;
type StringColorInitial = `${ColorPosition}${ColorInitials}`;
type ObjectColorInitial = {
  [key in ColorPosition]?: ColorInitials;
};

export class CColor {
  #n1 = brightnessIndex;
  #n2 = colorInitials;
  //@ts-ignore
  #num = (i: StringColorInitial) => `${this.#n1[Number(i.length)] + Number(i[0] === 'B')}${this.#n2.indexOf(i.at(-1))}`;

  #code = (n: string[], t: string) => `\x1b[${n.join(';')}m${t}\x1b[0m`;

  print = (text: string, initial: StringColorInitial | ObjectColorInitial) => {
    const nums = [];

    if (typeof initial === 'string' && initial) nums.push(this.#num(initial));
    else if (typeof initial === 'object') {
      for (const i1 in initial) {
        nums.push(this.#num((i1 + initial[i1 as ColorPosition]) as StringColorInitial));
      }
    }

    return nums.length ? this.#code(nums, text) : text;
  };
}
