import * as React from "react";
import { UnionStringArray } from "@chakra-ui/utils";
/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
export declare const domElements: readonly ["a", "abbr", "address", "area", "article", "aside", "b", "bdi", "bdo", "big", "blockquote", "button", "caption", "cite", "circle", "code", "col", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "nav", "ol", "optgroup", "option", "output", "p", "path", "picture", "pre", "q", "rect", "s", "svg", "section", "select", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "video"];
export declare type DOMElements = UnionStringArray<typeof domElements>;
export declare function pseudoProps({ theme, ...props }: any): {};
export declare function truncateProp({ isTruncated, noOfLines }: any): {
    overflow: string;
    textOverflow: string;
    display: string;
    WebkitBoxOrient: string;
    WebkitLineClamp: number;
    whiteSpace?: undefined;
} | {
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
    display?: undefined;
    WebkitBoxOrient?: undefined;
    WebkitLineClamp?: undefined;
} | undefined;
export declare function layerStyleProp({ layerStyle, textStyle, theme }: any): any;
export declare function applyProp(tag: React.ElementType): (props: any) => import("@chakra-ui/css/dist/types").CSSObject | undefined;
export default function isTag(target: any): boolean;
/**
 * Get the display name of a component.
 * It's really useful when debugging in Dev Tools.
 *
 * @param primitive the react element or component type
 */
export declare function getDisplayName(primitive: any): string;
//# sourceMappingURL=system.utils.d.ts.map