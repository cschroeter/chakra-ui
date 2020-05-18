"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrowStyles = exports.getOppositePosition = void 0;
var oppositeDirections = {
    top: "bottom",
    bottom: "top",
    right: "left",
    left: "right",
};
exports.getOppositePosition = function (position) {
    return oppositeDirections[position];
};
var splitPlacement = function (placement) {
    return placement.split("-");
};
function getArrowStyles(placement, arrowSize) {
    var _a;
    var position = splitPlacement(placement)[0];
    var oppositePosition = exports.getOppositePosition(position);
    if (!oppositePosition)
        return {};
    return _a = {},
        _a[oppositePosition] = "-" + arrowSize / 2 + "px",
        _a.width = arrowSize,
        _a.height = arrowSize,
        _a.position = "absolute",
        _a.transform = "rotate(45deg)",
        _a;
}
exports.getArrowStyles = getArrowStyles;
//# sourceMappingURL=Popper.utils.js.map