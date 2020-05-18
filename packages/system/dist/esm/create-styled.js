import { __assign, __rest } from "tslib";
import { css } from "@chakra-ui/css";
import { isEmptyObject, isString, isUndefined, runIfFn, } from "@chakra-ui/utils";
import hoist from "hoist-non-react-statics";
import { forwardRef, memo } from "react";
import { getComponentStyles } from "./component";
import { useChakra } from "./hooks";
import jsx from "./jsx";
import { customShouldForwardProp, filterProps, removeStyleProps, } from "./should-forward-prop";
import { getDisplayName } from "./system.utils";
function createStyled(component, options) {
    return function () {
        var interpolations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            interpolations[_i] = arguments[_i];
        }
        var Styled = forwardRef(function (_a, ref) {
            var as = _a.as, props = __rest(_a, ["as"]);
            // Get the color mode and theme from context
            var _b = useChakra(), theme = _b.theme, colorMode = _b.colorMode;
            // We'll store the final css object of style props here
            var computedStyles = {};
            // For each style interpolation, we'll pass the theme and colorMode
            var propsWithTheme = __assign({ theme: theme, colorMode: colorMode }, props);
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
                var baseStyleObject = runIfFn(options.baseStyle, propsWithTheme);
                var baseStyle = css(baseStyleObject)(theme);
                computedStyles = __assign(__assign({}, computedStyles), baseStyle);
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
                var componentStyles = getComponentStyles(propsWithTheme, options);
                computedStyles = __assign(__assign({}, computedStyles), componentStyles);
            }
            // Resolve each interpolation and add result to final style
            interpolations.forEach(function (interpolation) {
                var style = runIfFn(interpolation, propsWithTheme);
                computedStyles = __assign(__assign({}, computedStyles), style);
            });
            var element = as || component;
            var isTag = isString(element);
            var computedProps = isTag ? filterProps(props) : __assign({}, props);
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
                var attrsProps = runIfFn(options.attrs, propsWithTheme);
                computedProps = __assign(__assign({}, computedProps), attrsProps);
            }
            if (!isTag)
                computedProps = removeStyleProps(computedProps);
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
                computedProps = customShouldForwardProp(options.shouldForwardProp, computedProps);
            }
            // check if style is empty, we don't want to pass css prop to jsx if it's empty
            var isStyleEmpty = isEmptyObject(computedStyles);
            computedProps.css = isStyleEmpty
                ? runIfFn(computedProps.css, theme)
                : __assign(__assign({}, computedStyles), runIfFn(computedProps.css, theme));
            /**
             * This helps to prevent scenarios where no styles was passed
             * to the component but emotion generate a `css-0` className.
             */
            if (isEmptyObject(computedProps.css) || isUndefined(computedProps.css)) {
                delete computedProps.css;
            }
            /**
             * Create the element using emotion's jsx, similar tocreateElement
             * but it allows us pass a css object as prop and it'll convert it to a className
             */
            return jsx(element, __assign({ ref: ref }, computedProps));
        });
        // Compute the display name of the final component
        Styled.displayName = getDisplayName(component);
        Styled.defaultProps = component.defaultProps;
        // [Optimization] users can pass a pure option to memoize this component
        var StyledComponent = (options === null || options === void 0 ? void 0 : options.pure) ? memo(Styled) : Styled;
        // hoist all non-react statics attached to the `component` prop
        var Component = hoist(StyledComponent, component);
        return Component;
    };
}
export default createStyled;
//# sourceMappingURL=create-styled.js.map