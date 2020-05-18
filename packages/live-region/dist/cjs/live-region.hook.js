"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLiveRegion = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var live_region_1 = tslib_1.__importDefault(require("./live-region"));
function useLiveRegion(options) {
    var liveRegion = React.useState(function () {
        return new live_region_1.default(options);
    })[0];
    React.useEffect(function () {
        return function () {
            liveRegion.destroy();
        };
    }, [liveRegion]);
    return liveRegion;
}
exports.useLiveRegion = useLiveRegion;
exports.default = useLiveRegion;
//# sourceMappingURL=live-region.hook.js.map