"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemingContext = exports.ThemingProvider = exports.ChakraProvider = exports.useTheme = exports.ThemeProvider = void 0;
var tslib_1 = require("tslib");
var color_mode_1 = require("@chakra-ui/color-mode");
var utils_1 = require("@chakra-ui/utils");
var core_1 = require("@emotion/core");
var React = tslib_1.__importStar(require("react"));
var global_1 = require("./global");
function ThemeProvider(props) {
    var children = props.children, theme = props.theme;
    var outerTheme = React.useContext(core_1.ThemeContext);
    var mergedTheme = tslib_1.__assign(tslib_1.__assign({}, outerTheme), theme);
    return (React.createElement(core_1.ThemeContext.Provider, { value: mergedTheme }, children));
}
exports.ThemeProvider = ThemeProvider;
function useTheme() {
    var theme = React.useContext(core_1.ThemeContext);
    if (!theme) {
        throw Error("useTheme must be within a ThemeProvider");
    }
    return theme;
}
exports.useTheme = useTheme;
function ChakraProvider(props) {
    var theme = props.theme, children = props.children;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(color_mode_1.ColorModeProvider, null,
            React.createElement(global_1.GlobalStyle, null),
            children)));
}
exports.ChakraProvider = ChakraProvider;
var _a = utils_1.createContext({
    strict: false,
    name: "ComponentTheme",
}), ThemingProvider = _a[0], useThemingContext = _a[1];
exports.ThemingProvider = ThemingProvider;
exports.useThemingContext = useThemingContext;
//# sourceMappingURL=theme-provider.js.map