import * as React from "react";
import { Global as EmotionGlobal } from "@emotion/core";
import { useColorMode } from "@chakra-ui/color-mode";
import { css } from "@chakra-ui/css";
import { get, runIfFn } from "@chakra-ui/utils";
export function Global(props) {
    var styles = props.styles;
    var colorMode = useColorMode()[0];
    return React.createElement(EmotionGlobal, { styles: function (theme) { return styles({ theme: theme, colorMode: colorMode }); } });
}
export function GlobalStyle() {
    return (React.createElement(Global, { styles: function (props) {
            var theme = props.theme, colorMode = props.colorMode;
            var styleOrFn = get(theme, "styles.global");
            if (!styleOrFn)
                return;
            var globalStyle = runIfFn(styleOrFn, { colorMode: colorMode });
            var styles = css({ body: globalStyle })(theme);
            return styles;
        } }));
}
//# sourceMappingURL=global.js.map