export declare const pseudoSelectors: {
    /**
     * Styles for CSS selector `&:hover`
     */
    _hover: string;
    /**
     * Styles for CSS Selector `&:active`
     */
    _active: string;
    /**
     * Styles for CSS selector `&:focus`
     *
     */
    _focus: string;
    /**
     * Styles for the highlighted state.
     */
    _highlighted: string;
    /**
     * Styles to apply when a child of this element has received focus
     * - CSS Selector `&:focus-within`
     */
    _focusWithin: string;
    _focusVisible: string;
    /**
     * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
     * - `&[aria-disabled=true]`
     * - `&:disabled`
     * - `&:disabled:focus`
     * - `&:disabled:hover`
     * - `&:focus[aria-disabled=true]`
     * - `&:hover[aria-disabled=true]`
     */
    _disabled: string;
    /**
     * Styles for CSS Selector `&:readonly`
     */
    _readOnly: string;
    /**
     * Styles for CSS selector `&::before`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _before={{content:`""` }}/>
     * ```
     */
    _before: string;
    /**
     * Styles for CSS selector `&::after`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _after={{content:`""` }}/>
     * ```
     */
    _after: string;
    _empty: string;
    /**
     * Styles to apply when the ARIA attribute `aria-expanded` is `true`
     * - CSS selector `&[aria-expanded=true]`
     */
    _expanded: string;
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `true`
     * - CSS selector `&[aria-checked=true]`
     */
    _checked: string;
    /**
     * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
     * - CSS selector `&[aria-grabbed=true]`
     */
    _grabbed: string;
    /**
     * Styles for CSS Selector `&[aria-pressed=true]`
     * Typically used to style the current "pressed" state of toggle buttons
     */
    _pressed: string;
    /**
     * Styles to apply when the ARIA attribute `aria-invalid` is `true`
     * - CSS selector `&[aria-invalid=true]`
     */
    _invalid: string;
    /**
     * Styles for the valid state
     * - CSS selector `&[data-valid], &[data-state=valid]`
     */
    _valid: string;
    /**
     * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
     * Useful for styling loading states
     */
    _loading: string;
    /**
     * Styles to apply when the ARIA attribute `aria-selected` is `true`
     *
     * - CSS selector `&[aria-selected=true]`
     */
    _selected: string;
    /**
     * Styles for CSS Selector `[hidden=true]`
     */
    _hidden: string;
    /**
     * Styles for CSS Selector `&:-webkit-autofill`
     */
    _autofill: string;
    /**
     * Styles for CSS Selector `&:nth-child(even)`
     */
    _even: string;
    /**
     * Styles for CSS Selector `&:nth-child(odd)`
     */
    _odd: string;
    /**
     * Styles for CSS Selector `&:first-of-type`
     */
    _first: string;
    /**
     * Styles for CSS Selector `&:last-of-type`
     */
    _last: string;
    /**
     * Styles for CSS Selector `&:not(:first-of-type)`
     */
    _notFirst: string;
    /**
     * Styles for CSS Selector `&:not(:last-of-type)`
     */
    _notLast: string;
    /**
     * Styles for CSS Selector `&:visited`
     */
    _visited: string;
    /**
     * Used to style the active link in a navigation
     * Styles for CSS Selector `&[aria-current=page]`
     */
    _activeLink: string;
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
     * - CSS selector `&[aria-checked=mixed]`
     */
    _indeterminate: string;
    /**
     * Styles to apply when parent is hovered
     */
    _groupHover: string;
    /**
     * Styles to apply when parent is focused
     */
    _groupFocus: string;
    /**
     * Styles to apply when parent is active
     */
    _groupActive: string;
    /**
     * Styles to apply when parent is disabled
     */
    _groupDisabled: string;
    /**
     * Styles to apply when parent is invalid
     */
    _groupInvalid: string;
    /**
     * Styles to apply when parent is checked
     */
    _groupChecked: string;
    /**
     * Styles for CSS Selector `&::placeholder`.
     */
    _placeholder: string;
    /**
     * Styles for CSS Selector `&:fullscreen`.
     */
    _fullScreen: string;
    /**
     * Styles for CSS Selector `&::selection`
     */
    _selection: string;
};
export declare type Pseudos = typeof pseudoSelectors;
export declare const pseudoPropNames: ("_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_indeterminate" | "_groupHover" | "_groupFocus" | "_groupActive" | "_groupDisabled" | "_groupInvalid" | "_groupChecked" | "_placeholder" | "_fullScreen" | "_selection")[];
//# sourceMappingURL=pseudo.selector.d.ts.map