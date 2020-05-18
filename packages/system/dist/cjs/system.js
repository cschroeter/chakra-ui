"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chakra = void 0;
var tslib_1 = require("tslib");
var parser_1 = require("@chakra-ui/parser");
var create_styled_1 = tslib_1.__importDefault(require("./create-styled"));
var system_utils_1 = require("./system.utils");
function styled(component, options) {
    return create_styled_1.default(component, options)(parser_1.parser, system_utils_1.pseudoProps, system_utils_1.applyProp(component), system_utils_1.truncateProp, system_utils_1.layerStyleProp);
}
exports.chakra = styled;
system_utils_1.domElements.forEach(function (tag) {
    //@ts-ignore
    exports.chakra[tag] = exports.chakra(tag);
});
//# sourceMappingURL=system.js.map