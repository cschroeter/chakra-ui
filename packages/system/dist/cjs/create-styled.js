"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var css_1 = require("@chakra-ui/css");
var utils_1 = require("@chakra-ui/utils");
var hoist_non_react_statics_1 = tslib_1.__importDefault(require("hoist-non-react-statics"));
var react_1 = require("react");
var component_1 = require("./component");
var hooks_1 = require("./hooks");
var jsx_1 = tslib_1.__importDefault(require("./jsx"));
var should_forward_prop_1 = require("./should-forward-prop");
var system_utils_1 = require("./system.utils");
function createStyled(component, options) {
    return function () {
        var interpolations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            interpolations[_i] = arguments[_i];
        }
        var Styled = react_1.forwardRef(function (_a, ref) {
            var as = _a.as, props = tslib_1.__rest(_a, ["as"]);
            // Get the color mode and theme from context
            var _b = hooks_1.useChakra(), theme = _b.theme, colorMode = _b.colorMode;
            // We'll store the final css object of style props here
            var computedStyles = {};
            // For each style interpolation, we'll pass the theme and colorMode
            var propsWithTheme = tslib_1.__assign({ theme: theme, colorMode: colorMode }, props);
            /**
             * Users can pass a base style to the component options, let's resolve it
             *
             * @example
             * const Button = chakra("button", {
             *  baseStyle: {
             *    margin: 4,
             *    color: "red.300"
             *  }
             * })
             */
            if (options === null || options === void 0 ? void 0 : options.baseStyle) {
                var baseStyleObject = utils_1.runIfFn(options.baseStyle, propsWithTheme);
                var baseStyle = css_1.css(baseStyleObject)(theme);
                computedStyles = tslib_1.__assign(tslib_1.__assign({}, computedStyles), baseStyle);
            }
            /**
             * Users can pass a theme key to reference styles in the theme, let's resolve it.
             * Styles will be read from `theme.components.<themeKey>`
             *
             * @example
             * const Button = chakra("button", {
             *  themeKey: "Button"
             * })
             */
            if (options) {
                var componentStyles = component_1.getComponentStyles(propsWithTheme, options);
                computedStyles = tslib_1.__assign(tslib_1.__assign({}, computedStyles), componentStyles);
            }
            // Resolve each interpolation and add result to final style
            interpolations.forEach(function (interpolation) {
                var style = utils_1.runIfFn(interpolation, propsWithTheme);
                computedStyles = tslib_1.__assign(tslib_1.__assign({}, computedStyles), style);
            });
            var element = as || component;
            var isTag = utils_1.isString(element);
            var computedProps = isTag ? should_forward_prop_1.filterProps(props) : tslib_1.__assign({}, props);
            /**
             * Users can pass a html attributes to component options, let's resolve it.
             * Attributes will be passed to the underlying dom element
             *
             * @example
             * const Button = chakra("button", {
             *  attrs: {
             *    type: "submit"
             *  }
             * })
             */
            if (options === null || options === void 0 ? void 0 : options.attrs) {
                var attrsProps = utils_1.runIfFn(options.attrs, propsWithTheme);
                computedProps = tslib_1.__assign(tslib_1.__assign({}, computedProps), attrsProps);
            }
            if (!isTag)
                computedProps = should_forward_prop_1.removeStyleProps(computedProps);
            /**
             * Users can pass an option to control how props are forwarded
             *
             * @example
             * const Button = chakra("button", {
             *  attrs: props => ({
             *    type: "submit",
             *    disabled: props.isDisabled
             *  }),
             * shouldForwardProps: prop => prop !== "isDisabled"
             * })
             */
            if (options === null || options === void 0 ? void 0 : options.shouldForwardProp) {
                computedProps = should_forward_prop_1.customShouldForwardProp(options.shouldForwardProp, computedProps);
            }
            // check if style is empty, we don't want to pass css prop to jsx if it's empty
            var isStyleEmpty = utils_1.isEmptyObject(computedStyles);
            computedProps.css = isStyleEmpty
                ? utils_1.runIfFn(computedProps.css, theme)
                : tslib_1.__assign(tslib_1.__assign({}, computedStyles), utils_1.runIfFn(computedProps.css, theme));
            /**
             * This helps to prevent scenarios where no styles was passed
             * to the component but emotion generate a `css-0` className.
             */
            if (utils_1.isEmptyObject(computedProps.css) || utils_1.isUndefined(computedProps.css)) {
                delete computedProps.css;
            }
            /**
             * Create the element using emotion's jsx, similar tocreateElement
             * but it allows us pass a css object as prop and it'll convert it to a className
             */
            return jsx_1.default(element, tslib_1.__assign({ ref: ref }, computedProps));
        });
        // Compute the display name of the final component
        Styled.displayName = system_utils_1.getDisplayName(component);
        Styled.defaultProps = component.defaultProps;
        // [Optimization] users can pass a pure option to memoize this component
        var StyledComponent = (options === null || options === void 0 ? void 0 : options.pure) ? react_1.memo(Styled) : Styled;
        // hoist all non-react statics attached to the `component` prop
        var Component = hoist_non_react_statics_1.default(StyledComponent, component);
        return Component;
    };
}
exports.default = createStyled;
//# sourceMappingURL=create-styled.js.map