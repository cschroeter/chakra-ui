import { __assign } from "tslib";
import Checkbox, { CheckboxTokens } from "./Checkbox";
var baseStyle = Checkbox.baseStyle;
var Radio = {
    defaultProps: Checkbox.defaultProps,
    baseStyle: function (props) { return ({
        Control: __assign(__assign({}, baseStyle(props).Control), { borderRadius: "full", _checked: __assign(__assign({}, baseStyle(props).Control["_checked"]), { _before: {
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
    sizes: __assign(__assign({}, Checkbox.sizes), { sm: {
            Control: { width: 3, height: 3 },
        } }),
};
export var RadioTokens = CheckboxTokens;
export default Radio;
//# sourceMappingURL=Radio.js.map