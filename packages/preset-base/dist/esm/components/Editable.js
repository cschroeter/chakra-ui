import { __assign } from "tslib";
var base = {
    fontSize: "inherit",
    fontWeight: "inherit",
    textAlign: "inherit",
    bg: "transparent",
    transition: "all 0.2s",
    borderRadius: "md",
    paddingX: "3px",
    marginX: "-3px",
};
var Editable = {
    baseStyle: {
        Preview: __assign(__assign({}, base), { cursor: "text", display: "inline-block" }),
        Input: __assign(__assign({}, base), { outline: 0, width: "full", _focus: {
                boxShadow: "outline",
            }, _placeholder: {
                opacity: 0.6,
            } }),
    },
};
export default Editable;
//# sourceMappingURL=Editable.js.map