import { colorInitials } from './const.js';
type ColorPosition = 'F' | 'B';
type ColorBaseInitials = (typeof colorInitials)[number];
type ColorBrightInitials = `B${ColorBaseInitials}`;
type ColorInitials = ColorBaseInitials | ColorBrightInitials;
type StringColorInitial = `${ColorPosition}${ColorInitials}`;
type ObjectColorInitial = {
    [key in ColorPosition]?: ColorInitials;
};
export declare class CColor {
    #private;
    print: (text: string, initial: StringColorInitial | ObjectColorInitial) => string;
}
export {};
