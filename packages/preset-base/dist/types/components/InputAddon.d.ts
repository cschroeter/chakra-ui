import { Props, StyleProps } from "./utils";
declare function getOutlineStyle(props: Props): StyleProps;
declare function getFilledStyle(props: Props): StyleProps;
declare function getFlushedStyle(props: Props): StyleProps;
declare const InputAddon: {
    sizes: {
        [size: string]: string | import("@chakra-ui/parser/dist/types").SystemProps | {
            [component: string]: import("@chakra-ui/parser/dist/types").SystemProps;
        } | ((props: Props & Required<{}>) => StyleProps);
    };
    variants: {
        outline: typeof getOutlineStyle;
        filled: typeof getFilledStyle;
        flushed: typeof getFlushedStyle;
        unstyled: {
            bg: string;
            paddingX: number;
            height: string;
        };
    };
};
export default InputAddon;
//# sourceMappingURL=InputAddon.d.ts.map