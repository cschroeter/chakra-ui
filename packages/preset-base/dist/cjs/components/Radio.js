"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioTokens = void 0;
var tslib_1 = require("tslib");
var Checkbox_1 = tslib_1.__importStar(require("./Checkbox"));
var baseStyle = Checkbox_1.default.baseStyle;
var Radio = {
    defaultProps: Checkbox_1.default.defaultProps,
    baseStyle: function (props) { return ({
        Control: tslib_1.__assign(tslib_1.__assign({}, baseStyle(props).Control), { borderRadius: "full", _checked: tslib_1.__assign(tslib_1.__assign({}, baseStyle(props).Control["_checked"]), { _before: {
                    content: "\"\"",
                    display: "inline-block",
                    position: "relative",
                    width: "50%",
                    height: "50%",
                    borderRadius: "50%",
                    bg: "currentColor",
                } }) }),
        Label: baseStyle(props).Label,
    }); },
    sizes: tslib_1.__assign(tslib_1.__assign({}, Checkbox_1.default.sizes), { sm: {
            Control: { width: 3, height: 3 },
        } }),
};
exports.RadioTokens = Checkbox_1.CheckboxTokens;
exports.default = Radio;
//# sourceMappingURL=Radio.js.map