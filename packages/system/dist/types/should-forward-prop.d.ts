import { Dict } from "@chakra-ui/utils";
export declare type ValidHTMLProps = {
    htmlWidth?: string | number;
    htmlHeight?: string | number;
    htmlSize?: string | number;
};
export declare const validHTMLProps: {
    htmlWidth: string;
    htmlHeight: string;
    htmlSize: string;
};
export declare function filterProps(props: Dict): Record<string, any>;
export declare function removeStyleProps(props: Dict): Record<string, any>;
export declare function customShouldForwardProp(fn: (propName: string) => boolean, props: Dict): Record<string, any>;
//# sourceMappingURL=should-forward-prop.d.ts.map