import * as React from "react";
var noFlash = "(function() { try {\n  var mode = localStorage.getItem('chakra-ui-color-mode');\n  if (!mode) return\n  document.body.classList.add('chakra-ui-' + mode);\n} catch (e) {} })();";
/**
 * Script to add to the root of your application to help prevent
 * flash of color mode that can happen during page load.
 *
 * This is particular useful for SSR in Gatsby or Next.js
 */
export var InitializeColorMode = function () { return (React.createElement("script", { key: "chakra-ui-no-flash", dangerouslySetInnerHTML: { __html: noFlash } })); };
//# sourceMappingURL=InitializeColorMode.js.map