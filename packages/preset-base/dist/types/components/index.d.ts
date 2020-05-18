declare const _default: {
    Accordion: import("./utils").ComponentTheme<{}>;
    Button: import("./utils").ComponentTheme<{}>;
    Heading: import("./utils").ComponentTheme<{}>;
    Alert: import("./utils").ComponentTheme<{}>;
    Badge: import("./utils").ComponentTheme<{}>;
    Avatar: import("./utils").ComponentTheme<{
        name?: string | undefined;
    }>;
    Link: import("./utils").ComponentTheme<{}>;
    Code: import("./utils").ComponentTheme<{}>;
    Spinner: import("./utils").ComponentTheme<{}>;
    Menu: import("./utils").ComponentTheme<{}>;
    Tabs: import("./utils").ComponentTheme<{}>;
    Checkbox: import("./utils").ComponentTheme<{}>;
    Radio: import("./utils").ComponentTheme<{}>;
    Input: import("./Input").InputTheme;
    InputAddon: {
        sizes: {
            [size: string]: string | import("@chakra-ui/parser/dist/types").SystemProps | {
                [component: string]: import("@chakra-ui/parser/dist/types").SystemProps;
            } | ((props: import("./utils").Props & Required<{}>) => import("./utils").StyleProps);
        };
        variants: {
            outline: (props: import("./utils").Props) => import("./utils").StyleProps;
            filled: (props: import("./utils").Props) => import("./utils").StyleProps;
            flushed: (props: import("./utils").Props) => import("./utils").StyleProps;
            unstyled: {
                bg: string;
                paddingX: number;
                height: string;
            };
        };
    };
    Tooltip: import("./utils").ComponentTheme<{}>;
    CloseButton: import("./utils").ComponentTheme<{}>;
    Slider: import("./utils").ComponentTheme<{}>;
    NumberInput: import("./utils").ComponentTheme<{}>;
    Switch: import("./utils").ComponentTheme<{}>;
    Tag: import("./utils").ComponentTheme<{}>;
    Modal: import("./utils").ComponentTheme<{}>;
    Kbd: import("./utils").ComponentTheme<{}>;
    Select: import("./Input").InputTheme;
    Textarea: import("./Input").InputTheme;
    PinInput: import("./utils").ComponentTheme<import("./Input").InputProps>;
    Popover: import("./utils").ComponentTheme<{}>;
    Form: import("./utils").ComponentTheme<{}>;
    Editable: import("./utils").ComponentTheme<{}>;
    Progress: import("./utils").ComponentTheme<{
        isIndeterminate?: boolean | undefined;
    }>;
    Stat: import("./utils").ComponentTheme<{}>;
    Skeleton: import("./utils").ComponentTheme<import("./Skeleton").SkeletonProps>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map