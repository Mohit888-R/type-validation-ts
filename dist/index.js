"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.isNumber = void 0;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
