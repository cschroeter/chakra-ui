/// <reference types="react" />
import { Dict } from "@chakra-ui/utils";
import { SystemStyleObject } from "@chakra-ui/css";
export declare const jsx: (type: React.ElementType, props: Dict, ...children: React.ReactNode[]) => import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)> | null) | (new (props: any) => import("react").Component<any, any, any>)>;
/**
 * Merge `sx` into the react module declaration,
 * so it can be accessible anywhere jsx is imported
 */
declare module "react" {
    interface Attributes {
        sx?: SystemStyleObject;
    }
}
declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            /**
             * The sx prop lets you style elements inline, using values from your
             * theme. To use the sx prop, add the custom pragma as a comment to the
             * top of your module and import the jsx function.
             */
            sx?: SystemStyleObject;
        }
    }
}
export default jsx;
//# sourceMappingURL=jsx.d.ts.map