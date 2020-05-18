import { useColorMode } from "@chakra-ui/color-mode";
import { css } from "@chakra-ui/css";
import { get } from "@chakra-ui/utils";
import { getComponentDefaults, getComponentStyles } from "./component";
import { useTheme } from "./theme-provider";
export function useChakra() {
    var _a = useColorMode(), colorMode = _a[0], setColorMode = _a[1];
    var theme = useTheme();
    return { colorMode: colorMode, setColorMode: setColorMode, theme: theme };
}
export function useComponentStyle(props) {
    var size = props.size, variant = props.variant, colorScheme = props.colorScheme, themeKey = props.themeKey;
    var _a = useChakra(), theme = _a.theme, colorMode = _a.colorMode;
    return getComponentStyles({ variant: variant, size: size, theme: theme, colorScheme: colorScheme, colorMode: colorMode }, { themeKey: themeKey });
}
export function useThemeDefaultProps(themeKey) {
    var theme = useTheme();
    return getComponentDefaults(theme, themeKey);
}
export function useCss(styles) {
    var theme = useTheme();
    return css(styles)(theme);
}
export function useToken(scale, token, fallback) {
    var theme = useTheme();
    var path = scale + "." + token;
    return get(theme, path, fallback !== null && fallback !== void 0 ? fallback : token);
}
//# sourceMappingURL=hooks.js.map