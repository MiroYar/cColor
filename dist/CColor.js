"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CColor_n1, _CColor_n2, _CColor_num, _CColor_code;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CColor = void 0;
const const_1 = require("./const");
class CColor {
    constructor() {
        _CColor_n1.set(this, const_1.brightnessIndex);
        _CColor_n2.set(this, const_1.colorInitials);
        //@ts-ignore
        _CColor_num.set(this, (i) => `${__classPrivateFieldGet(this, _CColor_n1, "f")[Number(i.length)] + Number(i[0] === 'B')}${__classPrivateFieldGet(this, _CColor_n2, "f").indexOf(i.at(-1))}`);
        _CColor_code.set(this, (n, t) => `\x1b[${n.join(';')}m${t}\x1b[0m`);
        this.print = (text, initial) => {
            const nums = [];
            if (typeof initial === 'string' && initial)
                nums.push(__classPrivateFieldGet(this, _CColor_num, "f").call(this, initial));
            else if (typeof initial === 'object') {
                for (const i1 in initial) {
                    nums.push(__classPrivateFieldGet(this, _CColor_num, "f").call(this, (i1 + initial[i1])));
                }
            }
            return nums.length ? __classPrivateFieldGet(this, _CColor_code, "f").call(this, nums, text) : text;
        };
    }
}
exports.CColor = CColor;
_CColor_n1 = new WeakMap(), _CColor_n2 = new WeakMap(), _CColor_num = new WeakMap(), _CColor_code = new WeakMap();
