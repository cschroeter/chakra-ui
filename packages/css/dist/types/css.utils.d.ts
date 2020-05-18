import { Dict } from "@chakra-ui/utils";
export declare function hasTheme(props: PropsOrTheme): props is {
    theme: Dict;
};
export declare const determineTheme: (props: PropsOrTheme) => Record<string, any>;
export declare function transformWithConfig(theme: Dict, value: any, config: any): any;
export declare type PropsOrTheme = Dict | {
    theme: Dict;
};
//# sourceMappingURL=css.utils.d.ts.map