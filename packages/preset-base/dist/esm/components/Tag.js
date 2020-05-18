import Badge, { BadgeTokens } from "./Badge";
var Tag = {
    defaultProps: {
        size: "lg",
        variant: "subtle",
        colorScheme: "gray",
    },
    baseStyle: {
        outline: 0,
        _focus: {
            boxShadow: "outline",
        },
    },
    sizes: {
        sm: {
            minHeight: "1.25rem",
            minWidth: "1.25rem",
            fontSize: "xs",
            paddingX: 1,
            borderRadius: "sm",
        },
        md: {
            minHeight: "1.5rem",
            minWidth: "1.5rem",
            fontSize: "sm",
            borderRadius: "md",
            paddingX: 2,
        },
        lg: {
            minHeight: 8,
            minWidth: 8,
            fontSize: "md",
            borderRadius: "md",
            paddingX: 3,
        },
    },
    variants: Badge.variants,
};
export var TagTokens = {
    sizes: {
        sm: "sm",
        md: "md",
        lg: "lg",
    },
    variants: BadgeTokens.variants,
};
export default Tag;
//# sourceMappingURL=Tag.js.map