"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNumericKeyboardEvent = exports.isFloatingPointNumericCharacter = void 0;
var FLOATING_POINT_NUMBER_CHARACTER_REGEX = /^[Ee0-9\+\-\.]$/;
/**
 * Determine if a character is a DOM floating point character
 * @see https://www.w3.org/TR/2012/WD-html-markup-20120329/datatypes.html#common.data.float
 */
function isFloatingPointNumericCharacter(character) {
    return FLOATING_POINT_NUMBER_CHARACTER_REGEX.test(character);
}
exports.isFloatingPointNumericCharacter = isFloatingPointNumericCharacter;
/**
 * Determine if the event is a valid numeric keyboard event.
 * We use this so we can prevent non-number characters in the input
 */
function isValidNumericKeyboardEvent(event) {
    if (event.key == null)
        return true;
    var isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
    if (isModifierKey) {
        return true;
    }
    var isSingleCharacterKey = event.key.length === 1;
    if (!isSingleCharacterKey) {
        return true;
    }
    return isFloatingPointNumericCharacter(event.key);
}
exports.isValidNumericKeyboardEvent = isValidNumericKeyboardEvent;
//# sourceMappingURL=NumberInput.utils.js.map