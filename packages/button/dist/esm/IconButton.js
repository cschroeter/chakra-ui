import { __assign, __rest } from "tslib";
import { __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { Button } from "./Button";
import { forwardRef, isValidElement, cloneElement } from "react";
export var IconButton = forwardRef(function (props, ref) {
    var icon = props.icon, children = props.children, isRound = props.isRound, ariaLabel = props["aria-label"], rest = __rest(props
    /**
     * Passing the icon as prop or children should work
     */
    , ["icon", "children", "isRound", "aria-label"]);
    /**
     * Passing the icon as prop or children should work
     */
    var btnIcon = icon || children;
    var a11yProps = {
        "aria-hidden": true,
        focusable: false,
    };
    return (React.createElement(Button, __assign({ padding: "0", borderRadius: isRound ? "full" : "md", ref: ref, "aria-label": ariaLabel }, rest), isValidElement(btnIcon) ? cloneElement(btnIcon, a11yProps) : null));
});
if (__DEV__) {
    IconButton.displayName = "IconButton";
}
//# sourceMappingURL=IconButton.js.map