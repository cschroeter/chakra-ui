"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexbox = void 0;
var create_parser_1 = require("../create-parser");
var config = {
    alignItems: true,
    alignContent: true,
    justifyItems: true,
    justifyContent: true,
    flexWrap: true,
    flexDirection: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    flexBasis: {
        property: "flexBasis",
        scale: "sizes",
    },
    justifySelf: true,
    alignSelf: true,
    order: true,
    flexDir: {
        property: "flexDirection",
    },
};
exports.flexbox = create_parser_1.createParser(config);
//# sourceMappingURL=flexbox.js.map