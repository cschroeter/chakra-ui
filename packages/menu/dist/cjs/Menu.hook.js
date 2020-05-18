"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuOptionGroup = exports.useMenuOption = exports.useMenuItem = exports.useMenuButton = exports.useMenuList = exports.useMenu = void 0;
var tslib_1 = require("tslib");
var clickable_1 = require("@chakra-ui/clickable");
var descendant_1 = require("@chakra-ui/descendant");
var hooks_1 = require("@chakra-ui/hooks");
var popper_1 = require("@chakra-ui/popper");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
/**
 * React Hook to manage a menu
 *
 * It provides the logic and will be used with react context
 * to propagate it's return value to all children
 */
function useMenu(props) {
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
    var _f = hooks_1.useDisclosure(), isOpen = _f.isOpen, onOpen = _f.onOpen, onClose = _f.onClose, onToggle = _f.onToggle;
    /**
     * Prepare the reference to the menu and disclosure
     */
    var menuRef = react_1.useRef(null);
    var buttonRef = react_1.useRef(null);
    /**
     * Add some popper.js for dynamic positioning
     */
    var _g = popper_1.usePopper({
        placement: !hasParentMenu ? placementProp : "right-start",
        fixed: fixed,
        forceUpdate: isOpen,
        gutter: hasParentMenu ? 0 : gutter,
        preventOverflow: preventOverflow,
    }), placement = _g.placement, popper = _g.popper, reference = _g.reference;
    var _h = react_1.useState(-1), focusedIndex = _h[0], setFocusedIndex = _h[1];
    /**
     * Context to register all menu item nodes
     */
    var domContext = descendant_1.useDescendants();
    /**
     * Safety: If a parent menu is closed, we need to ensure
     * all children menus are closed as well
     */
    react_1.useEffect(function () {
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
    hooks_1.useUpdateEffect(function () {
        if (!isOpen && !hasParentMenu) {
            if (buttonRef.current) {
                utils_1.ensureFocus(buttonRef.current);
            }
        }
    }, [isOpen, hasParentMenu]);
    /**
     * Reset the focused index if the menu is closed
     */
    react_1.useEffect(function () {
        if (!isOpen) {
            setFocusedIndex(-1);
        }
    }, [isOpen]);
    /**
     * Generate unique ids for menu's list and button
     */
    var _j = hooks_1.useIds(id, "menu-button", "menu-list"), buttonId = _j[0], menuId = _j[1];
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
exports.useMenu = useMenu;
function useMenuList(props) {
    var menu = props.context, htmlProps = tslib_1.__rest(props, ["context"]);
    var focusedIndex = menu.focusedIndex, setFocusedIndex = menu.setFocusedIndex, hasParentMenu = menu.hasParentMenu, parentMenu = menu.parentMenu, closeOnBlur = menu.closeOnBlur, buttonRef = menu.buttonRef, menuRef = menu.menuRef, isOpen = menu.isOpen, onClose = menu.onClose, onOpen = menu.onOpen, popper = menu.popper, menuId = menu.menuId, placement = menu.placement, descendants = menu.domContext.descendants;
    /**
     * Effect to close this menu on outside click
     */
    react_1.useEffect(function () {
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
    var onCharacterPress = hooks_1.useShortcut({
        preventDefault: function (event) { return event.key !== " "; },
    });
    var onKeyDown = utils_1.createOnKeyDown({
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
            var nextItem = utils_1.getNextItemFromSearch(descendants, character, function (node) { var _a; return ((_a = node.element) === null || _a === void 0 ? void 0 : _a.textContent) || ""; }, descendants[focusedIndex]);
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
                var nextIndex = utils_1.getNextIndex(focusedIndex, descendants.length);
                setFocusedIndex(nextIndex);
            },
            ArrowUp: function () {
                var prevIndex = utils_1.getPrevIndex(focusedIndex, descendants.length);
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
                        utils_1.ensureFocus(buttonRef.current);
                    }
                }
            },
        },
    });
    var onBlur = react_1.useCallback(function (event) {
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
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { className: utils_1.cx("chakra-menu__menu-list", htmlProps.className), ref: utils_1.mergeRefs(menuRef, popper.ref), tabIndex: -1, role: "menu", id: menuId, hidden: !isOpen, "aria-orientation": "vertical", "data-placement": placement, style: tslib_1.__assign(tslib_1.__assign({}, htmlProps.style), popper.style), onMouseEnter: utils_1.callAllHandlers(props.onMouseEnter, onMouseEnter), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown), onBlur: utils_1.callAllHandlers(props.onBlur, onBlur) });
}
exports.useMenuList = useMenuList;
function useMenuButton(props) {
    var menu = props.context, htmlProps = tslib_1.__rest(props, ["context"]);
    var setFocusedIndex = menu.setFocusedIndex, onOpen = menu.onOpen, hasParentMenu = menu.hasParentMenu, isOpen = menu.isOpen, onClose = menu.onClose, parentMenu = menu.parentMenu, autoSelect = menu.autoSelect, menuRef = menu.menuRef, descendants = menu.domContext.descendants;
    var openAndFocusMenu = react_1.useCallback(function () {
        onOpen();
        if (menuRef.current) {
            utils_1.ensureFocus(menuRef.current);
        }
    }, [onOpen, menuRef]);
    var openAndFocusFirstItem = react_1.useCallback(function () {
        onOpen();
        setFocusedIndex(0);
    }, [onOpen, setFocusedIndex]);
    var openAndFocusLastItem = react_1.useCallback(function () {
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
    var onKeyDown = utils_1.createOnKeyDown({
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
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { ref: utils_1.mergeRefs(menu.buttonRef, menu.reference.ref), className: utils_1.cx("chakra-menu__menu-button", htmlProps.className), id: menu.buttonId, "data-active": utils_1.dataAttr(menu.isOpen), "aria-expanded": menu.isOpen, "aria-haspopup": "menu", "aria-controls": menu.menuId, onClick: utils_1.callAllHandlers(props.onClick, onClick), onMouseEnter: utils_1.callAllHandlers(props.onMouseEnter, onMouseEnter), onMouseLeave: utils_1.callAllHandlers(props.onMouseLeave, onMouseLeave), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown) });
}
exports.useMenuButton = useMenuButton;
function useMenuItem(props) {
    var menu = props.context, onMouseOutProp = props.onMouseOut, onClickProp = props.onClick, isDisabled = props.isDisabled, isFocusable = props.isFocusable, htmlProps = tslib_1.__rest(props, ["context", "onMouseOut", "onClick", "isDisabled", "isFocusable"]);
    var domContext = menu.domContext, setFocusedIndex = menu.setFocusedIndex, focusedIndex = menu.focusedIndex, closeOnSelect = menu.closeOnSelect, onClose = menu.onClose, menuRef = menu.menuRef;
    var ref = react_1.useRef(null);
    var id = "menuitem-" + hooks_1.useId();
    /**
     * Register the menuitem's node into the domContext
     */
    var index = descendant_1.useDescendant({
        element: ref.current,
        context: domContext,
        disabled: isDisabled,
        focusable: isFocusable,
    });
    var onMouseEnter = react_1.useCallback(function () {
        if (isDisabled)
            return;
        setFocusedIndex(index);
    }, [setFocusedIndex, index, isDisabled]);
    var onMouseMove = react_1.useCallback(function () {
        if (document.activeElement !== ref.current) {
            onMouseEnter();
        }
    }, [onMouseEnter]);
    var onMouseLeave = react_1.useCallback(function () {
        if (isDisabled)
            return;
        setFocusedIndex(-1);
    }, [setFocusedIndex, isDisabled]);
    var onClick = react_1.useCallback(function (event) {
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
    hooks_1.useUpdateEffect(function () {
        var _a;
        if (isFocused && !trulyDisabled) {
            if (ref.current) {
                utils_1.ensureFocus(ref.current);
            }
        }
        else {
            if (document.activeElement !== menuRef.current) {
                (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    }, [isFocused, trulyDisabled]);
    var tabbable = clickable_1.useClickable({
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        ref: ref,
        isDisabled: isDisabled,
        isFocusable: isFocusable,
    });
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, htmlProps), tabbable), { className: utils_1.cx("chakra-menu__menuitem", htmlProps.className), id: id, role: "menuitem", tabIndex: isFocused ? 0 : -1 });
}
exports.useMenuItem = useMenuItem;
function useMenuOption(props) {
    var menu = props.context, onMouseOut = props.onMouseOut, onClick = props.onClick, isDisabled = props.isDisabled, isFocusable = props.isFocusable, _a = props.type, type = _a === void 0 ? "radio" : _a, isChecked = props.isChecked, htmlProps = tslib_1.__rest(props, ["context", "onMouseOut", "onClick", "isDisabled", "isFocusable", "type", "isChecked"]);
    var ownProps = useMenuItem({
        isDisabled: isDisabled,
        isFocusable: isFocusable,
        context: menu,
        onClick: onClick,
    });
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, htmlProps), ownProps), { className: utils_1.cx("chakra-menu__menuitem-option", htmlProps.className), role: "menuitem" + type, "aria-checked": isChecked });
}
exports.useMenuOption = useMenuOption;
function useMenuOptionGroup(props) {
    var children = props.children, _a = props.type, type = _a === void 0 ? "radio" : _a, valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange, htmlProps = tslib_1.__rest(props, ["children", "type", "value", "defaultValue", "onChange"]);
    var isRadio = type === "radio";
    var fallback = isRadio ? "" : [];
    var _b = hooks_1.useControllableState({
        defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : fallback,
        value: valueProp,
        onChange: onChange,
    }), value = _b[0], setValue = _b[1];
    var handleChange = react_1.useCallback(function (selectedValue) {
        if (type === "radio" && utils_1.isString(value)) {
            setValue(selectedValue);
        }
        if (type === "checkbox" && utils_1.isArray(value)) {
            var nextValue = value.includes(selectedValue)
                ? utils_1.removeItem(value, selectedValue)
                : utils_1.addItem(value, selectedValue);
            setValue(nextValue);
        }
    }, [value, setValue, type]);
    var validChildren = utils_1.getValidChildren(children);
    var clones = validChildren.map(function (child) {
        var onClick = function (event) {
            var _a, _b;
            handleChange(child.props.value);
            (_b = (_a = child.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        var isChecked = type === "radio"
            ? child.props.value === value
            : value.includes(child.props.value);
        return react_1.cloneElement(child, {
            type: type,
            onClick: onClick,
            isChecked: isChecked,
        });
    });
    return tslib_1.__assign(tslib_1.__assign({}, htmlProps), { className: utils_1.cx("chakra-menu__option-group", htmlProps.className), children: clones });
}
exports.useMenuOptionGroup = useMenuOptionGroup;
//# sourceMappingURL=Menu.hook.js.map