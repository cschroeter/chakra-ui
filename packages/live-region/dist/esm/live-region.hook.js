import * as React from "react";
import LiveRegion from "./live-region";
export function useLiveRegion(options) {
    var liveRegion = React.useState(function () {
        return new LiveRegion(options);
    })[0];
    React.useEffect(function () {
        return function () {
            liveRegion.destroy();
        };
    }, [liveRegion]);
    return liveRegion;
}
export default useLiveRegion;
//# sourceMappingURL=live-region.hook.js.map