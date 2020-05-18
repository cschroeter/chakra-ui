import { __spreadArrays } from "tslib";
import { combineParsers } from "./combine-parser";
import { background, border, color, flexbox, grid, others, position, shadow, space, typography, layout, outline, } from "./configs";
import { pseudoPropNames } from "./pseudo";
export var parser = combineParsers(background, border, color, flexbox, layout, outline, grid, others, position, shadow, space, typography);
var layoutParser = combineParsers(space, layout, flexbox, grid, position);
export var layoutPropNames = layoutParser.propNames;
export var propNames = __spreadArrays(parser.propNames, pseudoPropNames);
//# sourceMappingURL=parser.js.map