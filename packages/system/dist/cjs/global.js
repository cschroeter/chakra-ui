"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = exports.Global = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var core_1 = require("@emotion/core");
var color_mode_1 = require("@chakra-ui/color-mode");
var css_1 = require("@chakra-ui/css");
var utils_1 = require("@chakra-ui/utils");
function Global(props) {
    var styles = props.styles;
    var colorMode = color_mode_1.useColorMode()[0];
    return React.createElement(core_1.Global, { styles: function (theme) { return styles({ theme: theme, colorMode: colorMode }); } });
}
exports.Global = Global;
function GlobalStyle() {
    return (React.createElement(Global, { styles: function (props) {
            var theme = props.theme, colorMode = props.colorMode;
            var styleOrFn = utils_1.get(theme, "styles.global");
            if (!styleOrFn)
                return;
            var globalStyle = utils_1.runIfFn(styleOrFn, { colorMode: colorMode });
            var styles = css_1.css({ body: globalStyle })(theme);
            return styles;
        } }));
}
exports.GlobalStyle = GlobalStyle;
//# sourceMappingURL=global.js.map