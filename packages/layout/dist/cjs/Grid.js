"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/grid
 */
exports.Grid = react_1.forwardRef(function (props, ref) {
    var area = props.area, templateAreas = props.templateAreas, gap = props.gap, rowGap = props.rowGap, columnGap = props.columnGap, column = props.column, row = props.row, autoFlow = props.autoFlow, autoRows = props.autoRows, templateRows = props.templateRows, templateColumns = props.templateColumns, rest = tslib_1.__rest(props, ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "templateColumns"]);
    return (React.createElement(system_1.chakra.div, tslib_1.__assign({ ref: ref, display: "grid", gridArea: props.area, gridTemplateAreas: props.templateAreas, gridGap: props.gap, gridRowGap: props.rowGap, gridColumnGap: props.columnGap, gridAutoColumns: props.autoColumns, gridColumn: props.column, gridRow: props.row, gridAutoFlow: props.autoFlow, gridAutoRows: props.autoRows, gridTemplateRows: props.templateRows, gridTemplateColumns: props.templateColumns }, rest)));
});
if (utils_1.__DEV__) {
    exports.Grid.displayName = "Grid";
}
//# sourceMappingURL=Grid.js.map