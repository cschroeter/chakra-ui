"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePseudo = void 0;
var utils_1 = require("@chakra-ui/utils");
var pseudo_selector_1 = require("./pseudo.selector");
var isPseudoProp = function (prop) {
    return prop in pseudo_selector_1.pseudoSelectors;
};
var getPropName = utils_1.memoizeOne(function (prop) {
    return isPseudoProp(prop) ? pseudo_selector_1.pseudoSelectors[prop] : prop;
});
function parsePseudo(props) {
    var next = {};
    for (var prop in props) {
        var propValue = props[prop];
        var propName = getPropName(prop);
        if (utils_1.isObject(propValue) && !utils_1.isFunction(propValue)) {
            next[propName] = parsePseudo(propValue);
        }
        else {
            next[propName] = propValue;
        }
    }
    return next;
}
exports.parsePseudo = parsePseudo;
//# sourceMappingURL=pseudo.utils.js.map