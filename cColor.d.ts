import { colorInitials } from './const';

type ColorPosition = 'F' | 'B';
type ColorBaseInitials = (typeof colorInitials)[number];
type ColorBrightInitials = `B${ColorBaseInitials}`;
type ColorInitials = ColorBaseInitials | ColorBrightInitials;
type StringColorInitial = `${ColorPosition}${ColorInitials}`;
type ObjectColorInitial = {
  [key in ColorPosition]?: ColorInitials;
};
type cColor = (text: string, initial: StringColorInitial | ObjectColorInitial) => string;
export default cColor;
