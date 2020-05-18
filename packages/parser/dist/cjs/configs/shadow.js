"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadow = void 0;
var create_parser_1 = require("../create-parser");
var config = {
    boxShadow: {
        property: "boxShadow",
        scale: "shadows",
    },
    textShadow: {
        property: "textShadow",
        scale: "shadows",
    },
};
exports.shadow = create_parser_1.createParser(config);
//# sourceMappingURL=shadow.js.map