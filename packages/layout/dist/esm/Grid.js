import { __assign, __rest } from "tslib";
import * as React from "react";
import { forwardRef } from "react";
import { chakra } from "@chakra-ui/system";
import { __DEV__ } from "@chakra-ui/utils";
/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/grid
 */
export var Grid = forwardRef(function (props, ref) {
    var area = props.area, templateAreas = props.templateAreas, gap = props.gap, rowGap = props.rowGap, columnGap = props.columnGap, column = props.column, row = props.row, autoFlow = props.autoFlow, autoRows = props.autoRows, templateRows = props.templateRows, templateColumns = props.templateColumns, rest = __rest(props, ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "templateColumns"]);
    return (React.createElement(chakra.div, __assign({ ref: ref, display: "grid", gridArea: props.area, gridTemplateAreas: props.templateAreas, gridGap: props.gap, gridRowGap: props.rowGap, gridColumnGap: props.columnGap, gridAutoColumns: props.autoColumns, gridColumn: props.column, gridRow: props.row, gridAutoFlow: props.autoFlow, gridAutoRows: props.autoRows, gridTemplateRows: props.templateRows, gridTemplateColumns: props.templateColumns }, rest)));
});
if (__DEV__) {
    Grid.displayName = "Grid";
}
//# sourceMappingURL=Grid.js.map