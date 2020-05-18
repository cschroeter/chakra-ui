import { createParser } from "../create-parser";
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
export var flexbox = createParser(config);
//# sourceMappingURL=flexbox.js.map