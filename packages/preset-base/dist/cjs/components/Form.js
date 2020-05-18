"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Form = {
    baseStyle: function (props) { return ({
        Label: {
            fontSize: "md",
            marginRight: 3,
            marginBottom: 2,
            fontWeight: "medium",
            transition: "all 0.2s",
            opacity: 1,
            _disabled: {
                opacity: 0.4,
            },
        },
        ErrorText: {
            color: utils_1.mode("red.500", "red.300")(props),
            marginTop: 2,
            fontSize: "sm",
        },
        RequiredIndicator: {
            marginLeft: 1,
            color: utils_1.mode("red.500", "red.300")(props),
        },
        HelperText: {
            marginTop: 2,
            color: utils_1.mode("gray.500", "whiteAlpha.600")(props),
            lineHeight: "normal",
            fontSize: "sm",
        },
        ErrorIcon: {
            marginRight: "0.5em",
            color: utils_1.mode("red.500", "red.300")(props),
        },
    }); },
};
exports.default = Form;
//# sourceMappingURL=Form.js.map