import { createParser } from "../create-parser";
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
export var grid = createParser(config);
//# sourceMappingURL=grid.js.map