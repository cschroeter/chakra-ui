"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grid = void 0;
var create_parser_1 = require("../create-parser");
var config = {
    gridGap: {
        property: "gridGap",
        scale: "space",
    },
    gridColumnGap: {
        property: "gridColumnGap",
        scale: "space",
    },
    gridRowGap: {
        property: "gridRowGap",
        scale: "space",
    },
    gridColumn: true,
    gridRow: true,
    gridAutoFlow: true,
    gridAutoColumns: true,
    gridAutoRows: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    gridTemplateAreas: true,
    gridArea: true,
    placeItems: true,
};
exports.grid = create_parser_1.createParser(config);
//# sourceMappingURL=grid.js.map