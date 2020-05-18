"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = exports.BreadcrumbItem = exports.BreadcrumbLink = exports.BreadcrumbSeparator = void 0;
var tslib_1 = require("tslib");
var system_1 = require("@chakra-ui/system");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
/**
 * React component that separates each breadcrumb link
 */
exports.BreadcrumbSeparator = react_1.forwardRef(function (_a, ref) {
    var spacing = _a.spacing, props = tslib_1.__rest(_a, ["spacing"]);
    return (React.createElement(system_1.chakra.span, tslib_1.__assign({ ref: ref, role: "presentation", mx: spacing }, props)));
});
if (utils_1.__DEV__) {
    exports.BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
}
var StyledLink = system_1.chakra("a", {
    themeKey: "Link",
});
/**
 * Breadcrumb link implementation.
 *
 * It renders a `span` when it's the current link. Otherwise,
 * it renders an anchor tag.
 */
function BreadcrumbLinkImpl(props, ref) {
    var isCurrentPage = props.isCurrentPage, as = props.as, className = props.className, rest = tslib_1.__rest(props, ["isCurrentPage", "as", "className"]);
    var _className = utils_1.cx("chakra-breadcrumb__link", className);
    var sharedProps = tslib_1.__assign(tslib_1.__assign({ ref: ref, as: as }, rest), { className: _className });
    if (isCurrentPage) {
        return React.createElement(system_1.chakra.span, tslib_1.__assign({ "aria-current": "page" }, sharedProps));
    }
    return React.createElement(StyledLink, tslib_1.__assign({}, sharedProps));
}
/**
 * React component that represent a single breadcrumb item's link.
 *
 * It also supports `as` prop which can be used to integrate
 * third-party routing libraries
 *
 * @example
 *
 * ```jsx
 *  <BreadcrumbLink as={Link} to="/home" replace>
 *     Breadcrumb 1
 *   </BreadcrumbLink>
 * ```
 *
 * @see Docs https://chakra-ui.com/breadcrumbs
 */
exports.BreadcrumbLink = react_1.forwardRef(BreadcrumbLinkImpl);
if (utils_1.__DEV__) {
    exports.BreadcrumbLink.displayName = "BreadcrumbLink";
}
/**
 * React component used to group a breadcrumb link
 *
 * It renders a `li` element to denote it belongs to an order list of links
 *
 * @see Docs https://chakra-ui.com/breadcrumbs
 */
exports.BreadcrumbItem = react_1.forwardRef(function (props, ref) {
    var isCurrentPage = props.isCurrentPage, separator = props.separator, isLastChild = props.isLastChild, spacing = props.spacing, children = props.children, className = props.className, rest = tslib_1.__rest(props, ["isCurrentPage", "separator", "isLastChild", "spacing", "children", "className"]);
    var validChildren = utils_1.getValidChildren(children);
    var clones = validChildren.map(function (child) {
        if (child.type === exports.BreadcrumbLink) {
            return react_1.cloneElement(child, {
                isCurrentPage: isCurrentPage,
            });
        }
        if (child.type === exports.BreadcrumbSeparator) {
            return react_1.cloneElement(child, {
                spacing: spacing,
                children: child.props.children || separator,
            });
        }
        return child;
    });
    var _className = utils_1.cx("chakra-breadcrumb__list-item", className);
    return (React.createElement(system_1.chakra.li, tslib_1.__assign({ ref: ref, display: "inline-flex", alignItems: "center", className: _className }, rest),
        clones,
        !isLastChild && (React.createElement(exports.BreadcrumbSeparator, { spacing: spacing, children: separator }))));
});
if (utils_1.__DEV__) {
    exports.BreadcrumbItem.displayName = "BreadcrumbItem";
}
/**
 * React component used to render a breadcrumb navigation landmark
 *
 * It renders a `nav` element with `aria-label` set to `Breadcrumb`
 *
 * @see Docs https://chakra-ui.com/breadcrumbs
 */
exports.Breadcrumb = react_1.forwardRef(function (props, ref) {
    var children = props.children, _a = props.spacing, spacing = _a === void 0 ? "0.5rem" : _a, _b = props.separator, separator = _b === void 0 ? "/" : _b, className = props.className, rest = tslib_1.__rest(props, ["children", "spacing", "separator", "className"]);
    var validChildren = utils_1.getValidChildren(children);
    var count = validChildren.length;
    var clones = validChildren.map(function (child, index) {
        return react_1.cloneElement(child, {
            separator: separator,
            spacing: spacing,
            isLastChild: count === index + 1,
        });
    });
    var _className = utils_1.cx("chakra-breadcrumb", className);
    return (React.createElement(system_1.chakra.nav, tslib_1.__assign({ ref: ref, "aria-label": "breadcrumb", className: _className }, rest),
        React.createElement(system_1.chakra.ol, { className: "chakra-breadcrumb__list" }, clones)));
});
if (utils_1.__DEV__) {
    exports.Breadcrumb.displayName = "Breadcrumb";
}
//# sourceMappingURL=Breadcrumb.js.map