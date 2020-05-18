"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var Portal_manager_1 = require("./Portal.manager");
var hooks_1 = require("@chakra-ui/hooks");
var _a = utils_1.createContext({
    strict: false,
    name: "PortalContext",
}), PortalContextProvider = _a[0], usePortalContext = _a[1];
/**
 * Portal
 *
 * Declarative component used to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @see Docs https://chakra-ui.com/portal
 */
function Portal(props) {
    var onMount = props.onMount, onUnmount = props.onUnmount, children = props.children, getContainer = props.getContainer;
    /**
     * Generate the portal's dom node. We'll wrap the children
     * in this dom node before mounting it.
     */
    var portal = React.useState(function () {
        if (utils_1.isBrowser) {
            var div = document.createElement("div");
            div.className = "chakra-portal";
            return div;
        }
        // for ssr
        return null;
    })[0];
    /**
     * This portal might be nested in another portal.
     * Let's read from the portal context to check this.
     */
    var parentPortal = usePortalContext();
    /**
     * If there's a PortalManager rendered, let's read from it.
     * We use the portal manager to manage multiple portals
     */
    var manager = Portal_manager_1.usePortalManager();
    var append = React.useCallback(function (container) {
        // if user specified a mount node, do nothing.
        if (!portal || !container)
            return;
        // else, simply append component to the portal node
        container.appendChild(portal);
    }, [portal]);
    hooks_1.useSafeLayoutEffect(function () {
        var _a, _b;
        // get the custom container from the container prop
        var customContainer = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
        /**
         * We need to know where to mount this portal, we have 4 options:
         * - If a mountRef is specified, we'll use that as the container
         * - If portal is nested, use the parent portal node as container.
         * - If it's not nested, use the manager's node as container
         * - else use document.body as containers
         */
        var container = (_b = (_a = customContainer !== null && customContainer !== void 0 ? customContainer : parentPortal) !== null && _a !== void 0 ? _a : manager === null || manager === void 0 ? void 0 : manager.node) !== null && _b !== void 0 ? _b : document.body;
        /**
         * Append portal node to the computed container
         */
        append(container);
        onMount === null || onMount === void 0 ? void 0 : onMount();
        return function () {
            onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount();
            if (!portal)
                return;
            if (container === null || container === void 0 ? void 0 : container.contains(portal)) {
                container === null || container === void 0 ? void 0 : container.removeChild(portal);
            }
        };
    }, [
        getContainer,
        portal,
        parentPortal,
        onMount,
        onUnmount,
        manager && manager.node,
        append,
    ]);
    var finalChildren = (manager === null || manager === void 0 ? void 0 : manager.zIndex) ? (React.createElement("div", { className: "chakra-portal-zIndex", style: { zIndex: manager.zIndex } }, children)) : (children);
    if (!portal) {
        return React.createElement(React.Fragment, null, finalChildren);
    }
    return react_dom_1.createPortal(React.createElement(PortalContextProvider, { value: portal }, finalChildren), portal);
}
exports.Portal = Portal;
if (utils_1.__DEV__) {
    Portal.displayName = "Portal";
}
//# sourceMappingURL=Portal.js.map