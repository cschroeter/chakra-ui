import { __assign, __rest } from "tslib";
import { chakra, } from "@chakra-ui/system";
import { getValidChildren, __DEV__, cx } from "@chakra-ui/utils";
import * as React from "react";
import { cloneElement, forwardRef } from "react";
/**
 * React component that separates each breadcrumb link
 */
export var BreadcrumbSeparator = forwardRef(function (_a, ref) {
    var spacing = _a.spacing, props = __rest(_a, ["spacing"]);
    return (React.createElement(chakra.span, __assign({ ref: ref, role: "presentation", mx: spacing }, props)));
});
if (__DEV__) {
    BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
}
var StyledLink = chakra("a", {
    themeKey: "Link",
});
/**
 * Breadcrumb link implementation.
 *
 * It renders a `span` when it's the current link. Otherwise,
 * it renders an anchor tag.
 */
function BreadcrumbLinkImpl(props, ref) {
    var isCurrentPage = props.isCurrentPage, as = props.as, className = props.className, rest = __rest(props, ["isCurrentPage", "as", "className"]);
    var _className = cx("chakra-breadcrumb__link", className);
    var sharedProps = __assign(__assign({ ref: ref, as: as }, rest), { className: _className });
    if (isCurrentPage) {
        return React.createElement(chakra.span, __assign({ "aria-current": "page" }, sharedProps));
    }
    return React.createElement(StyledLink, __assign({}, sharedProps));
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
export var BreadcrumbLink = forwardRef(BreadcrumbLinkImpl);
if (__DEV__) {
    BreadcrumbLink.displayName = "BreadcrumbLink";
}
/**
 * React component used to group a breadcrumb link
 *
 * It renders a `li` element to denote it belongs to an order list of links
 *
 * @see Docs https://chakra-ui.com/breadcrumbs
 */
export var BreadcrumbItem = forwardRef(function (props, ref) {
    var isCurrentPage = props.isCurrentPage, separator = props.separator, isLastChild = props.isLastChild, spacing = props.spacing, children = props.children, className = props.className, rest = __rest(props, ["isCurrentPage", "separator", "isLastChild", "spacing", "children", "className"]);
    var validChildren = getValidChildren(children);
    var clones = validChildren.map(function (child) {
        if (child.type === BreadcrumbLink) {
            return cloneElement(child, {
                isCurrentPage: isCurrentPage,
            });
        }
        if (child.type === BreadcrumbSeparator) {
            return cloneElement(child, {
                spacing: spacing,
                children: child.props.children || separator,
            });
        }
        return child;
    });
    var _className = cx("chakra-breadcrumb__list-item", className);
    return (React.createElement(chakra.li, __assign({ ref: ref, display: "inline-flex", alignItems: "center", className: _className }, rest),
        clones,
        !isLastChild && (React.createElement(BreadcrumbSeparator, { spacing: spacing, children: separator }))));
});
if (__DEV__) {
    BreadcrumbItem.displayName = "BreadcrumbItem";
}
/**
 * React component used to render a breadcrumb navigation landmark
 *
 * It renders a `nav` element with `aria-label` set to `Breadcrumb`
 *
 * @see Docs https://chakra-ui.com/breadcrumbs
 */
export var Breadcrumb = forwardRef(function (props, ref) {
    var children = props.children, _a = props.spacing, spacing = _a === void 0 ? "0.5rem" : _a, _b = props.separator, separator = _b === void 0 ? "/" : _b, className = props.className, rest = __rest(props, ["children", "spacing", "separator", "className"]);
    var validChildren = getValidChildren(children);
    var count = validChildren.length;
    var clones = validChildren.map(function (child, index) {
        return cloneElement(child, {
            separator: separator,
            spacing: spacing,
            isLastChild: count === index + 1,
        });
    });
    var _className = cx("chakra-breadcrumb", className);
    return (React.createElement(chakra.nav, __assign({ ref: ref, "aria-label": "breadcrumb", className: _className }, rest),
        React.createElement(chakra.ol, { className: "chakra-breadcrumb__list" }, clones)));
});
if (__DEV__) {
    Breadcrumb.displayName = "Breadcrumb";
}
//# sourceMappingURL=Breadcrumb.js.map