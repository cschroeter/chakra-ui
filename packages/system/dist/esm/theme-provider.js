import { __assign } from "tslib";
import { ColorModeProvider } from "@chakra-ui/color-mode";
import { createContext } from "@chakra-ui/utils";
import { ThemeContext } from "@emotion/core";
import * as React from "react";
import { GlobalStyle } from "./global";
export function ThemeProvider(props) {
    var children = props.children, theme = props.theme;
    var outerTheme = React.useContext(ThemeContext);
    var mergedTheme = __assign(__assign({}, outerTheme), theme);
    return (React.createElement(ThemeContext.Provider, { value: mergedTheme }, children));
}
export function useTheme() {
    var theme = React.useContext(ThemeContext);
    if (!theme) {
        throw Error("useTheme must be within a ThemeProvider");
    }
    return theme;
}
export function ChakraProvider(props) {
    var theme = props.theme, children = props.children;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(ColorModeProvider, null,
            React.createElement(GlobalStyle, null),
            children)));
}
var _a = createContext({
    strict: false,
    name: "ComponentTheme",
}), ThemingProvider = _a[0], useThemingContext = _a[1];
export { ThemingProvider, useThemingContext };
//# sourceMappingURL=theme-provider.js.map