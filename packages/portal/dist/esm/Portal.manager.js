import * as React from "react";
import { createContext, __DEV__ } from "@chakra-ui/utils";
import { useSafeLayoutEffect, useForceUpdate } from "@chakra-ui/hooks";
var _a = createContext({
    strict: false,
}), PortalManagerCtxProvider = _a[0], usePortalManager = _a[1];
export { usePortalManager };
/**
 * PortalManager
 *
 * Used to manage multiple portals within an application.
 * It must be render only once, at the root of your application.
 *
 * Inspired by BaseWeb's LayerManager component
 */
export function PortalManager(props) {
    var children = props.children, zIndex = props.zIndex;
    /**
     * The element that wraps the stacked layers
     */
    var ref = React.useRef(null);
    var forceUpdate = useForceUpdate();
    /**
     * force an update on mount so the Provider works correctly
     */
    useSafeLayoutEffect(function () {
        forceUpdate();
    }, []);
    /**
     * let's detect if use has mutiple instances of this component
     */
    var parentManager = usePortalManager();
    var context = {
        node: (parentManager === null || parentManager === void 0 ? void 0 : parentManager.node) || ref.current,
        zIndex: zIndex,
    };
    return (React.createElement(PortalManagerCtxProvider, { value: context },
        children,
        React.createElement("div", { className: "chakra-portal-manager", ref: ref })));
}
if (__DEV__) {
    PortalManager.displayName = "PortalManager";
}
//# sourceMappingURL=Portal.manager.js.map