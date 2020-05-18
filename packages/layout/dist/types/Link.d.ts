import { chakra, PropsOf } from "@chakra-ui/system";
import * as React from "react";
interface LinkOptions {
    /**
     *  If `true`, the link will open in new tab
     */
    isExternal?: boolean;
    /**
     * Function called when the link is clicked
     */
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare type LinkProps = PropsOf<typeof chakra.a> & LinkOptions;
/**
 * Link
 *
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * React Router, Reach Router and Next.js Link.
 *
 * @example
 *
 * ```jsx
 * <Link as={ReactRouterLink} to="/home">Home</Link>
 * ```
 *
 * @see Docs https://chakra-ui.com/link
 */
export declare const Link: import("@chakra-ui/system/dist/types").ChakraComponent<"a", LinkOptions>;
export {};
//# sourceMappingURL=Link.d.ts.map