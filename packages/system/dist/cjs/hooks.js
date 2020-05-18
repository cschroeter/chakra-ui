"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = exports.useCss = exports.useThemeDefaultProps = exports.useComponentStyle = exports.useChakra = void 0;
var color_mode_1 = require("@chakra-ui/color-mode");
var css_1 = require("@chakra-ui/css");
var utils_1 = require("@chakra-ui/utils");
var component_1 = require("./component");
var theme_provider_1 = require("./theme-provider");
function useChakra() {
    var _a = color_mode_1.useColorMode(), colorMode = _a[0], setColorMode = _a[1];
    var theme = theme_provider_1.useTheme();
    return { colorMode: colorMode, setColorMode: setColorMode, theme: theme };
}
exports.useChakra = useChakra;
function useComponentStyle(props) {
    var size = props.size, variant = props.variant, colorScheme = props.colorScheme, themeKey = props.themeKey;
    var _a = useChakra(), theme = _a.theme, colorMode = _a.colorMode;
    return component_1.getComponentStyles({ variant: variant, size: size, theme: theme, colorScheme: colorScheme, colorMode: colorMode }, { themeKey: themeKey });
}
exports.useComponentStyle = useComponentStyle;
function useThemeDefaultProps(themeKey) {
    var theme = theme_provider_1.useTheme();
    return component_1.getComponentDefaults(theme, themeKey);
}
exports.useThemeDefaultProps = useThemeDefaultProps;
function useCss(styles) {
    var theme = theme_provider_1.useTheme();
    return css_1.css(styles)(theme);
}
exports.useCss = useCss;
function useToken(scale, token, fallback) {
    var theme = theme_provider_1.useTheme();
    var path = scale + "." + token;
    return utils_1.get(theme, path, fallback !== null && fallback !== void 0 ? fallback : token);
}
exports.useToken = useToken;
//# sourceMappingURL=hooks.js.map