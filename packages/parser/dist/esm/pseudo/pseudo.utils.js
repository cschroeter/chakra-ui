import { memoizeOne, isObject, isFunction } from "@chakra-ui/utils";
import { pseudoSelectors } from "./pseudo.selector";
var isPseudoProp = function (prop) {
    return prop in pseudoSelectors;
};
var getPropName = memoizeOne(function (prop) {
    return isPseudoProp(prop) ? pseudoSelectors[prop] : prop;
});
export function parsePseudo(props) {
    var next = {};
    for (var prop in props) {
        var propValue = props[prop];
        var propName = getPropName(prop);
        if (isObject(propValue) && !isFunction(propValue)) {
            next[propName] = parsePseudo(propValue);
        }
        else {
            next[propName] = propValue;
        }
    }
    return next;
}
//# sourceMappingURL=pseudo.utils.js.map