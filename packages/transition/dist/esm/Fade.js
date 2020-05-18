import { __assign, __rest } from "tslib";
import * as React from "react";
import { Transition } from "./Transition";
var styles = {
    init: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
};
export function Fade(props) {
    var _a = props.timeout, timeout = _a === void 0 ? 150 : _a, rest = __rest(props, ["timeout"]);
    return (React.createElement(Transition, __assign({ transition: "all " + timeout + "ms cubic-bezier(0.175, 0.885, 0.320, 1.175)", styles: styles, timeout: { enter: 0, exit: timeout } }, rest)));
}
export default Fade;
//# sourceMappingURL=Fade.js.map