import { __assign, __rest } from "tslib";
import { useClickable } from "@chakra-ui/clickable";
import { useDescendant, useDescendants } from "@chakra-ui/descendant";
import { useControllableState, useDisclosure, useId, useIds, useShortcut, useUpdateEffect, } from "@chakra-ui/hooks";
import { usePopper } from "@chakra-ui/popper";
import { addItem, callAllHandlers, createOnKeyDown, getNextIndex, getNextItemFromSearch, getPrevIndex, getValidChildren, isArray, mergeRefs, removeItem, cx, isString, dataAttr, ensureFocus, } from "@chakra-ui/utils";
import * as React from "react";
import { useEffect, useCallback, useRef, cloneElement, useState } from "react";
/**
 * React Hook to manage a menu
 *
 * It provides the logic and will be used with react context
 * to propagate it's return value to all children
 */
export function useMenu(props) {
    var context = props.context, id = props.id, _a = props.closeOnSelect, closeOnSelect = _a === void 0 ? true : _a, _b = props.closeOnBlur, closeOnBlur = _b === void 0 ? true : _b, _c = props.autoSelect, autoSelect = _c === void 0 ? true : _c, _d = props.placement, placementProp = _d === void 0 ? "bottom-start" : _d, gutter = props.gutter, _e = props.fixed, fixed = _e === void 0 ? true : _e, preventOverflow = props.preventOverflow;
    /**
     * If this menu is a nested menu, that means
     * there's a parent menu context
     */
    var parentMenu = context;
    /**
     * Check if this menu is a nested menu or top level menu
     */
    var hasParentMenu = Boolean(parentMenu);
    /**
     * Regular open and close stuff
     */
    var _f = useDisclosure(), isOpen = _f.isOpen, onOpen = _f.onOpen, onClose = _f.onClose, onToggle = _f.onToggle;
    /**
     * Prepare the reference to the menu and disclosure
     */
    var menuRef = useRef(null);
    var buttonRef = useRef(null);
    /**
     * Add some popper.js for dynamic positioning
     */
    var _g = usePopper({
        placement: !hasParentMenu ? placementProp : "right-start",
        fixed: fixed,
        forceUpdate: isOpen,
        gutter: hasParentMenu ? 0 : gutter,
        preventOverflow: preventOverflow,
    }), placement = _g.placement, popper = _g.popper, reference = _g.reference;
    var _h = useState(-1), focusedIndex = _h[0], setFocusedIndex = _h[1];
    /**
     * Context to register all menu item nodes
     */
    var domContext = useDescendants();
    /**
     * Safety: If a parent menu is closed, we need to ensure
     * all children menus are closed as well
     */
    useEffect(function () {
        if (!parentMenu)
            return;
        var parentIsNotOpen = hasParentMenu && !parentMenu.isOpen;
        if (isOpen && parentIsNotOpen) {
            onClose();
        }
    }, [isOpen, onClose, parentMenu, hasParentMenu]);
    /**
     * Focus the top-level disclosure when we close the menu
     */
    useUpdateEffect(function () {
        if (!isOpen && !hasParentMenu) {
            if (buttonRef.current) {
                ensureFocus(buttonRef.current);
            }
        }
    }, [isOpen, hasParentMenu]);
    /**
     * Reset the focused index if the menu is closed
     */
    useEffect(function () {
        if (!isOpen) {
            setFocusedIndex(-1);
        }
    }, [isOpen]);
    /**
     * Generate unique ids for menu's list and button
     */
    var _j = useIds(id, "menu-button", "menu-list"), buttonId = _j[0], menuId = _j[1];
    return {
        domContext: domContext,
        popper: popper,
        placement: placement,
        reference: reference,
        buttonId: buttonId,
        menuId: menuId,
        parentMenu: parentMenu,
        hasParentMenu: hasParentMenu,
        orientation: "vertical",
        isOpen: isOpen,
        onToggle: onToggle,
        onOpen: onOpen,
        onClose: onClose,
        menuRef: menuRef,
        buttonRef: buttonRef,
        focusedIndex: focusedIndex,
        closeOnSelect: closeOnSelect,
        closeOnBlur: closeOnBlur,
        autoSelect: autoSelect,
        setFocusedIndex: setFocusedIndex,
    };
}
export function useMenuList(props) {
    var menu = props.context, htmlProps = __rest(props, ["context"]);
    var focusedIndex = menu.focusedIndex, setFocusedIndex = menu.setFocusedIndex, hasParentMenu = menu.hasParentMenu, parentMenu = menu.parentMenu, closeOnBlur = menu.closeOnBlur, buttonRef = menu.buttonRef, menuRef = menu.menuRef, isOpen = menu.isOpen, onClose = menu.onClose, onOpen = menu.onOpen, popper = menu.popper, menuId = menu.menuId, placement = menu.placement, descendants = menu.domContext.descendants;
    /**
     * Effect to close this menu on outside click
     */
    useEffect(function () {
        var click = function (event) {
            var _a, _b;
            var target = event.target;
            /**
             * if the menu is not open, don't do anything
             */
            if (!isOpen)
                return;
            /**
             * if the click is within the menu container, don't do anything
             */
            if ((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(target)) {
                return;
            }
            /**
             * Nested menu: Don't trigger close if we're clicking on a menu item that doubles
             * as a menu button.
             *
             * The reason for `cond1` and `cond2` is that the event target might be an element
             * inside the `MenuItem` (e.g the span that wraps the label), so we need to check
             * the target and the target's parent as well.
             */
            var parentIsButton = (_b = target === null || target === void 0 ? void 0 : target.parentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("aria-controls");
            var isButton = target === null || target === void 0 ? void 0 : target.hasAttribute("aria-controls");
            if (parentIsButton || isButton) {
                return;
            }
            /**
             * Otherwise, close the menu provided `closeOnBlur` is set to `true`
             */
            if (closeOnBlur) {
                onClose();
            }
        };
        /**
         * add the event listener for click
         */
        document.addEventListener("click", click);
        return function () {
            /**
             * remove the event listener, to avoid memory leak
             */
            document.removeEventListener("click", click);
        };
    }, [onClose, hasParentMenu, closeOnBlur, buttonRef, menuRef, isOpen]);
    var onMouseEnter = function () {
        /**
         * If we're in a nested menu, keep the menu open when we mouse into it
         */
        if (hasParentMenu) {
            onOpen();
        }
    };
    /**
     * Hook that creates a keydown event handler that listens
     * to printable keyboard character press
     */
    var onCharacterPress = useShortcut({
        preventDefault: function (event) { return event.key !== " "; },
    });
    var onKeyDown = createOnKeyDown({
        /**
         * Allow `Escape` key to propagate to it's parent
         * which will trigger close for all parent menus.
         *
         * In any other case, don't allow propagation
         */
        stopPropagation: function (event) {
            if (event.key === "Escape" && hasParentMenu) {
                return false;
            }
            return true;
        },
        onKeyDown: onCharacterPress(function (character) {
            /**
             * Typeahead: Based on current character pressed,
             * find the next item to be selected
             */
            var nextItem = getNextItemFromSearch(descendants, character, function (node) { var _a; return ((_a = node.element) === null || _a === void 0 ? void 0 : _a.textContent) || ""; }, descendants[focusedIndex]);
            if (nextItem) {
                var index = descendants.indexOf(nextItem);
                setFocusedIndex(index);
            }
        }),
        keyMap: {
            Escape: function () {
                onClose();
                var next = menu.parentMenu;
                while (next != null) {
                    next.onClose();
                    next = next.parentMenu;
                }
            },
            ArrowDown: function () {
                var nextIndex = getNextIndex(focusedIndex, descendants.length);
                setFocusedIndex(nextIndex);
            },
            ArrowUp: function () {
                var prevIndex = getPrevIndex(focusedIndex, descendants.length);
                setFocusedIndex(prevIndex);
            },
            ArrowLeft: function () {
                /**
                 * If this is a nested menu, and user presses `ArrowLeft`,
                 * we'll close the nested menu and move back to the parent menu
                 */
                if (hasParentMenu) {
                    onClose();
                    if (buttonRef.current) {
                        ensureFocus(buttonRef.current);
                    }
                }
            },
        },
    });
    var onBlur = useCallback(function (event) {
        var _a, _b;
        var target = (event.relatedTarget ||
            document.activeElement);
        var isWithinSelf = (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(target);
        var isInParent = (_b = parentMenu === null || parentMenu === void 0 ? void 0 : parentMenu.menuRef.current) === null || _b === void 0 ? void 0 : _b.contains(target);
        var isMenuButton = target === buttonRef.current;
        if (!isWithinSelf && hasParentMenu && !isMenuButton && isInParent) {
            onClose();
        }
    }, [menuRef, parentMenu, buttonRef, hasParentMenu, onClose]);
    return __assign(__assign({}, htmlProps), { className: cx("chakra-menu__menu-list", htmlProps.className), ref: mergeRefs(menuRef, popper.ref), tabIndex: -1, role: "menu", id: menuId, hidden: !isOpen, "aria-orientation": "vertical", "data-placement": placement, style: __assign(__assign({}, htmlProps.style), popper.style), onMouseEnter: callAllHandlers(props.onMouseEnter, onMouseEnter), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown), onBlur: callAllHandlers(props.onBlur, onBlur) });
}
export function useMenuButton(props) {
    var menu = props.context, htmlProps = __rest(props, ["context"]);
    var setFocusedIndex = menu.setFocusedIndex, onOpen = menu.onOpen, hasParentMenu = menu.hasParentMenu, isOpen = menu.isOpen, onClose = menu.onClose, parentMenu = menu.parentMenu, autoSelect = menu.autoSelect, menuRef = menu.menuRef, descendants = menu.domContext.descendants;
    var openAndFocusMenu = useCallback(function () {
        onOpen();
        if (menuRef.current) {
            ensureFocus(menuRef.current);
        }
    }, [onOpen, menuRef]);
    var openAndFocusFirstItem = useCallback(function () {
        onOpen();
        setFocusedIndex(0);
    }, [onOpen, setFocusedIndex]);
    var openAndFocusLastItem = useCallback(function () {
        onOpen();
        var lastIndex = descendants.length - 1;
        setFocusedIndex(lastIndex);
    }, [onOpen, setFocusedIndex, descendants]);
    /**
     * Click handler for the top-level menu button
     */
    var onClick = React.useCallback(function (event) {
        /**
         * Prevent this action if it's not top-level button
         */
        if (hasParentMenu) {
            return;
        }
        if (isOpen) {
            onClose();
        }
        if (!isOpen) {
            if (autoSelect) {
                openAndFocusFirstItem();
            }
            else {
                openAndFocusMenu();
            }
        }
    }, [
        autoSelect,
        hasParentMenu,
        isOpen,
        onClose,
        openAndFocusFirstItem,
        openAndFocusMenu,
    ]);
    var onMouseEnter = function (event) {
        /**
         * Prevent this action if button it's a top-level menu button,
         * since top-level menus don't open on mouse-over but on click.
         *
         * Only nested menus open on mouse over.
         */
        if (!hasParentMenu)
            return;
        var self = event.currentTarget;
        /**
         * Open the nested menu after a delay
         */
        setTimeout(function () {
            if (self.contains(document.activeElement)) {
                onOpen();
                /**
                 * If this menu item hasn't received focus due to browser
                 * issues, force it to focus
                 */
                if (document.activeElement !== self) {
                    self.focus();
                }
            }
        }, 200);
    };
    var onMouseLeave = function (event) {
        /**
         * If we mouseout to any menu item within parent menu
         * we'll close the nested menu
         */
        var parentMenuList = parentMenu === null || parentMenu === void 0 ? void 0 : parentMenu.menuRef.current;
        var target = event.currentTarget;
        if (parentMenuList === null || parentMenuList === void 0 ? void 0 : parentMenuList.contains(target)) {
            onClose();
        }
    };
    var onKeyDown = createOnKeyDown({
        preventDefault: !hasParentMenu,
        keyMap: {
            Enter: function () {
                openAndFocusFirstItem();
            },
            ArrowDown: function () {
                if (!hasParentMenu) {
                    openAndFocusFirstItem();
                }
            },
            ArrowUp: function () {
                if (!hasParentMenu) {
                    openAndFocusLastItem();
                }
            },
            ArrowRight: function () {
                if (hasParentMenu) {
                    openAndFocusFirstItem();
                }
            },
        },
    });
    return __assign(__assign({}, htmlProps), { ref: mergeRefs(menu.buttonRef, menu.reference.ref), className: cx("chakra-menu__menu-button", htmlProps.className), id: menu.buttonId, "data-active": dataAttr(menu.isOpen), "aria-expanded": menu.isOpen, "aria-haspopup": "menu", "aria-controls": menu.menuId, onClick: callAllHandlers(props.onClick, onClick), onMouseEnter: callAllHandlers(props.onMouseEnter, onMouseEnter), onMouseLeave: callAllHandlers(props.onMouseLeave, onMouseLeave), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown) });
}
export function useMenuItem(props) {
    var menu = props.context, onMouseOutProp = props.onMouseOut, onClickProp = props.onClick, isDisabled = props.isDisabled, isFocusable = props.isFocusable, htmlProps = __rest(props, ["context", "onMouseOut", "onClick", "isDisabled", "isFocusable"]);
    var domContext = menu.domContext, setFocusedIndex = menu.setFocusedIndex, focusedIndex = menu.focusedIndex, closeOnSelect = menu.closeOnSelect, onClose = menu.onClose, menuRef = menu.menuRef;
    var ref = useRef(null);
    var id = "menuitem-" + useId();
    /**
     * Register the menuitem's node into the domContext
     */
    var index = useDescendant({
        element: ref.current,
        context: domContext,
        disabled: isDisabled,
        focusable: isFocusable,
    });
    var onMouseEnter = useCallback(function () {
        if (isDisabled)
            return;
        setFocusedIndex(index);
    }, [setFocusedIndex, index, isDisabled]);
    var onMouseMove = useCallback(function () {
        if (document.activeElement !== ref.current) {
            onMouseEnter();
        }
    }, [onMouseEnter]);
    var onMouseLeave = useCallback(function () {
        if (isDisabled)
            return;
        setFocusedIndex(-1);
    }, [setFocusedIndex, isDisabled]);
    var onClick = useCallback(function (event) {
        /**
         * If we're clicking on an menuitem that's a menu-button
         * for a submenu ignore the click
         */
        if (event.currentTarget.hasAttribute("aria-controls")) {
            event.preventDefault();
            return;
        }
        onClickProp === null || onClickProp === void 0 ? void 0 : onClickProp(event);
        /**
         * Close menu and parent menu's if `closeOnSelect` is set to `true`
         */
        if (closeOnSelect) {
            onClose();
        }
    }, [onClose, onClickProp, closeOnSelect]);
    var isFocused = index === focusedIndex;
    var trulyDisabled = isDisabled && !isFocusable;
    useUpdateEffect(function () {
        var _a;
        if (isFocused && !trulyDisabled) {
            if (ref.current) {
                ensureFocus(ref.current);
            }
        }
        else {
            if (document.activeElement !== menuRef.current) {
                (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    }, [isFocused, trulyDisabled]);
    var tabbable = useClickable({
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        ref: ref,
        isDisabled: isDisabled,
        isFocusable: isFocusable,
    });
    return __assign(__assign(__assign({}, htmlProps), tabbable), { className: cx("chakra-menu__menuitem", htmlProps.className), id: id, role: "menuitem", tabIndex: isFocused ? 0 : -1 });
}
export function useMenuOption(props) {
    var menu = props.context, onMouseOut = props.onMouseOut, onClick = props.onClick, isDisabled = props.isDisabled, isFocusable = props.isFocusable, _a = props.type, type = _a === void 0 ? "radio" : _a, isChecked = props.isChecked, htmlProps = __rest(props, ["context", "onMouseOut", "onClick", "isDisabled", "isFocusable", "type", "isChecked"]);
    var ownProps = useMenuItem({
        isDisabled: isDisabled,
        isFocusable: isFocusable,
        context: menu,
        onClick: onClick,
    });
    return __assign(__assign(__assign({}, htmlProps), ownProps), { className: cx("chakra-menu__menuitem-option", htmlProps.className), role: "menuitem" + type, "aria-checked": isChecked });
}
export function useMenuOptionGroup(props) {
    var children = props.children, _a = props.type, type = _a === void 0 ? "radio" : _a, valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange, htmlProps = __rest(props, ["children", "type", "value", "defaultValue", "onChange"]);
    var isRadio = type === "radio";
    var fallback = isRadio ? "" : [];
    var _b = useControllableState({
        defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : fallback,
        value: valueProp,
        onChange: onChange,
    }), value = _b[0], setValue = _b[1];
    var handleChange = useCallback(function (selectedValue) {
        if (type === "radio" && isString(value)) {
            setValue(selectedValue);
        }
        if (type === "checkbox" && isArray(value)) {
            var nextValue = value.includes(selectedValue)
                ? removeItem(value, selectedValue)
                : addItem(value, selectedValue);
            setValue(nextValue);
        }
    }, [value, setValue, type]);
    var validChildren = getValidChildren(children);
    var clones = validChildren.map(function (child) {
        var onClick = function (event) {
            var _a, _b;
            handleChange(child.props.value);
            (_b = (_a = child.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        var isChecked = type === "radio"
            ? child.props.value === value
            : value.includes(child.props.value);
        return cloneElement(child, {
            type: type,
            onClick: onClick,
            isChecked: isChecked,
        });
    });
    return __assign(__assign({}, htmlProps), { className: cx("chakra-menu__option-group", htmlProps.className), children: clones });
}
//# sourceMappingURL=Menu.hook.js.map