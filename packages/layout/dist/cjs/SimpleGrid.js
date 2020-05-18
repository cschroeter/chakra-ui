"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGrid = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var react_1 = tslib_1.__importStar(require("react"));
var Grid_1 = require("./Grid");
/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/simplegrid
 */
exports.SimpleGrid = react_1.forwardRef(function (props, ref) {
    var columns = props.columns, spacingX = props.spacingX, spacingY = props.spacingY, spacing = props.spacing, minChildWidth = props.minChildWidth, rest = tslib_1.__rest(props, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);
    var templateColumns = Boolean(minChildWidth)
        ? widthToColumns(minChildWidth)
        : countToColumns(columns);
    return (react_1.default.createElement(Grid_1.Grid, tslib_1.__assign({ ref: ref, gap: spacing, columnGap: spacingX, rowGap: spacingY, templateColumns: templateColumns }, rest)));
});
if (utils_1.__DEV__) {
    exports.SimpleGrid.displayName = "SimpleGrid";
}
var toPx = function (n) {
    return utils_1.isNumber(n) ? n + "px" : n;
};
var widthToColumns = function (width) {
    return utils_1.mapResponsive(width, function (value) {
        return utils_1.isNull(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))";
    });
};
var countToColumns = function (count) {
    return utils_1.mapResponsive(count, function (value) {
        return utils_1.isNull(value) ? null : "repeat(" + value + ", 1fr)";
    });
};
//# sourceMappingURL=SimpleGrid.js.map