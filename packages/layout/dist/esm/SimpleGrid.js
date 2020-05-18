import { __assign, __rest } from "tslib";
import { mapResponsive, isNumber, isNull, __DEV__ } from "@chakra-ui/utils";
import React, { forwardRef } from "react";
import { Grid } from "./Grid";
/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/simplegrid
 */
export var SimpleGrid = forwardRef(function (props, ref) {
    var columns = props.columns, spacingX = props.spacingX, spacingY = props.spacingY, spacing = props.spacing, minChildWidth = props.minChildWidth, rest = __rest(props, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);
    var templateColumns = Boolean(minChildWidth)
        ? widthToColumns(minChildWidth)
        : countToColumns(columns);
    return (React.createElement(Grid, __assign({ ref: ref, gap: spacing, columnGap: spacingX, rowGap: spacingY, templateColumns: templateColumns }, rest)));
});
if (__DEV__) {
    SimpleGrid.displayName = "SimpleGrid";
}
var toPx = function (n) {
    return isNumber(n) ? n + "px" : n;
};
var widthToColumns = function (width) {
    return mapResponsive(width, function (value) {
        return isNull(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))";
    });
};
var countToColumns = function (count) {
    return mapResponsive(count, function (value) {
        return isNull(value) ? null : "repeat(" + value + ", 1fr)";
    });
};
//# sourceMappingURL=SimpleGrid.js.map