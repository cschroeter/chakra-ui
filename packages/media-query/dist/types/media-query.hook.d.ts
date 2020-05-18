/**
 * useBreakpoint
 *
 * React hook for getting the current responsive media breakpoint.
 *
 * @param defaultBreakpoint default breakpoint name
 * (in non-window environments like SSR)
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/juliangruber/is-mobile)
 * to get the default breakpoint value from the user-agent
 */
export declare function useBreakpoint(defaultBreakpoint?: string): string | undefined;
/**
 * @todo add useBreakpointValue hook
 */
export declare type Breakpoint = {
    breakpoint: string;
    maxWidth?: string;
    minWidth: string;
};
//# sourceMappingURL=media-query.hook.d.ts.map