import { __assign } from "tslib";
import breakpoints from "./breakpoints";
import colors from "./colors";
import radii from "./radius";
import shadows from "./shadows";
import sizes, { baseSizes } from "./sizes";
import typography from "./typography";
import zIndices from "./z-index";
import borders from "./borders";
var space = baseSizes;
var theme = __assign(__assign({ breakpoints: breakpoints,
    zIndices: zIndices,
    radii: radii,
    colors: colors }, typography), { sizes: sizes,
    shadows: shadows,
    space: space,
    borders: borders });
export default theme;
//# sourceMappingURL=index.js.map