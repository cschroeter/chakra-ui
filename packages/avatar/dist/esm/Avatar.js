import { __assign, __rest } from "tslib";
import { useImage } from "@chakra-ui/image";
import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { forwardRef, cloneElement } from "react";
import { cx, __DEV__ } from "@chakra-ui/utils";
/**
 * AvatarBadge
 *
 * React component used to show extra badge to the top-right
 * or bottom-right corner of an avatar.
 */
export var AvatarBadge = chakra("div", {
    themeKey: "Avatar.Badge",
    baseStyle: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "0",
        bottom: "0",
    },
    attrs: function (props) { return ({
        className: cx("chakra-avatar__badge", props.className),
    }); },
});
if (__DEV__) {
    AvatarBadge.displayName = "AvatarBadge";
}
/**
 * Gets the initials of a user based on the name
 * @param name the name passed
 */
function initials(name) {
    var _a = name.split(" "), firstName = _a[0], lastName = _a[1];
    if (firstName && lastName) {
        return "" + firstName.charAt(0) + lastName.charAt(0);
    }
    else {
        return firstName.charAt(0);
    }
}
/**
 * The avatar name container
 */
var InitialsAvatar = function (props) {
    var name = props.name, getInitials = props.getInitials, className = props.className, rest = __rest(props, ["name", "getInitials", "className"]);
    var _className = cx("chakra-avatar__name", className);
    return (React.createElement(chakra.div, __assign({ "aria-label": name, className: _className }, rest), name ? getInitials === null || getInitials === void 0 ? void 0 : getInitials(name) : null));
};
/**
 * Fallback avatar react component.
 * This should be a generic svg used to represent an avatar
 */
var DefaultIcon = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 128 128", color: "#fff", style: { width: "100%", height: "100%" } }, props),
    React.createElement("path", { fill: "currentColor", d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" }),
    React.createElement("path", { fill: "currentColor", d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" }))); };
export var baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "medium",
    position: "relative",
    flexShrink: 0,
};
/**
 * Theming
 *
 * To style the avatar globally, change the styles in
 * `theme.components.Avatar` under the `Root` key
 */
var StyledAvatar = chakra("span", {
    themeKey: "Avatar.Root",
    baseStyle: baseStyle,
    shouldForwardProp: function (prop) { return !["name"].includes(prop); },
});
/**
 * Avatar
 *
 * React component that renders an user avatar with
 * support for fallback avatar and name-only avatars
 */
export var Avatar = forwardRef(function (props, ref) {
    var src = props.src, name = props.name, showBorder = props.showBorder, _a = props.borderRadius, borderRadius = _a === void 0 ? "full" : _a, onError = props.onError, _b = props.getInitials, getInitials = _b === void 0 ? initials : _b, _c = props.icon, icon = _c === void 0 ? React.createElement(DefaultIcon, null) : _c, className = props.className, rest = __rest(props
    // use the image hook to only show the image when it has loaded
    , ["src", "name", "showBorder", "borderRadius", "onError", "getInitials", "icon", "className"]);
    // use the image hook to only show the image when it has loaded
    var status = useImage({ src: src, onError: onError });
    var hasLoaded = status === "loaded";
    var getAvatar = function () {
        /**
         * If `src` was passed and the image has loaded, we'll show it
         */
        if (src && hasLoaded) {
            return (React.createElement(chakra.img, { className: "chakra-avatar__img", width: "100%", height: "100%", objectFit: "cover", borderRadius: borderRadius, src: src, alt: name }));
        }
        /**
         * Fallback avatar applies under 2 conditions:
         * - If `src` was passed and the image has not loaded or failed to load
         * - If `src` wasn't passed
         *
         * In this case, we'll show either the name avatar or default avatar
         */
        var showFallback = !src || (src && !hasLoaded);
        if (showFallback) {
            return name ? (React.createElement(InitialsAvatar, { getInitials: getInitials, name: name })) : (cloneElement(icon, {
                role: "img",
                className: cx("chakra-avatar__icon", icon.props.className),
            }));
        }
    };
    return (React.createElement(StyledAvatar, __assign({ ref: ref, borderRadius: borderRadius, borderWidth: showBorder ? "2px" : undefined, name: name, className: cx("chakra-avatar", className) }, rest),
        getAvatar(),
        props.children));
});
if (__DEV__) {
    Avatar.displayName = "Avatar";
}
//# sourceMappingURL=Avatar.js.map