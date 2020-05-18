"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fade = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Transition_1 = require("./Transition");
var styles = {
    init: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
};
function Fade(props) {
    var _a = props.timeout, timeout = _a === void 0 ? 150 : _a, rest = tslib_1.__rest(props, ["timeout"]);
    return (React.createElement(Transition_1.Transition, tslib_1.__assign({ transition: "all " + timeout + "ms cubic-bezier(0.175, 0.885, 0.320, 1.175)", styles: styles, timeout: { enter: 0, exit: timeout } }, rest)));
}
exports.Fade = Fade;
exports.default = Fade;
//# sourceMappingURL=Fade.js.map