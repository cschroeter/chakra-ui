"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeColorMode = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var noFlash = "(function() { try {\n  var mode = localStorage.getItem('chakra-ui-color-mode');\n  if (!mode) return\n  document.body.classList.add('chakra-ui-' + mode);\n} catch (e) {} })();";
/**
 * Script to add to the root of your application to help prevent
 * flash of color mode that can happen during page load.
 *
 * This is particular useful for SSR in Gatsby or Next.js
 */
exports.InitializeColorMode = function () { return (React.createElement("script", { key: "chakra-ui-no-flash", dangerouslySetInnerHTML: { __html: noFlash } })); };
//# sourceMappingURL=InitializeColorMode.js.map