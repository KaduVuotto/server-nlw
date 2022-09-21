"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinute = void 0;
function convertHourStringToMinute(hourString) {
    const [hours, minutes] = hourString.split(":").map(Number);
    const minutesAmount = hours * 60 + minutes;
    return minutesAmount;
}
exports.convertHourStringToMinute = convertHourStringToMinute;
