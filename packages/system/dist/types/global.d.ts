/// <reference types="react" />
import { Interpolation } from "@emotion/core";
import { ColorMode } from "@chakra-ui/color-mode";
export interface GlobalProps {
    styles: (props: {
        theme: object;
        colorMode: ColorMode;
    }) => Interpolation;
}
export declare function Global(props: GlobalProps): JSX.Element;
export declare function GlobalStyle(): JSX.Element;
//# sourceMappingURL=global.d.ts.map