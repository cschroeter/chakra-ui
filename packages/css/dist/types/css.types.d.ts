import { Omit } from "@chakra-ui/utils";
import * as CSS from "csstype";
import { Pseudos } from "@chakra-ui/parser";
declare type StandardCSSProperties = CSS.PropertiesFallback<number | string>;
declare type Responsive<T> = T | Array<T | null>;
declare type CSSProperties = CSS.StandardProperties<number | string> & CSS.SvgProperties<number | string>;
declare type CSSPseudoSelectorProps = {
    [K in CSS.Pseudos]?: SystemStyleObject;
};
export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudosForCSSObject, CSSOthersObjectForCSSObject {
}
declare type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K];
};
declare type CSSPseudosForCSSObject = {
    [K in CSS.Pseudos]?: CSSObject;
};
declare type CSSInterpolation = undefined | number | string | CSSObject;
interface CSSOthersObjectForCSSObject {
    [propertiesName: string]: CSSInterpolation;
}
interface CSSSelectorObject {
    [cssSelector: string]: SystemStyleObject;
}
interface AliasesCSSProperties {
    bg?: StandardCSSProperties["background"];
    bgColor?: StandardCSSProperties["backgroundColor"];
    bgImage?: StandardCSSProperties["backgroundImage"];
    bgSize?: StandardCSSProperties["backgroundSize"];
    bgPosition?: StandardCSSProperties["backgroundPosition"];
    bgRepeat?: StandardCSSProperties["backgroundRepeat"];
    bgAttachment?: StandardCSSProperties["backgroundAttachment"];
    borderX?: StandardCSSProperties["border"];
    borderY?: StandardCSSProperties["border"];
    borderTopRadius?: StandardCSSProperties["borderRadius"];
    borderBottomRadius?: StandardCSSProperties["borderRadius"];
    borderLeftRadius?: StandardCSSProperties["borderRadius"];
    borderRightRadius?: StandardCSSProperties["borderRadius"];
    textColor?: StandardCSSProperties["color"];
    flexDir?: StandardCSSProperties["flexDirection"];
    w?: StandardCSSProperties["width"];
    h?: StandardCSSProperties["height"];
    minW?: StandardCSSProperties["minWidth"];
    maxW?: StandardCSSProperties["maxWidth"];
    minH?: StandardCSSProperties["minHeight"];
    maxH?: StandardCSSProperties["maxHeight"];
    m?: StandardCSSProperties["margin"];
    mt?: StandardCSSProperties["marginTop"];
    mr?: StandardCSSProperties["marginRight"];
    mb?: StandardCSSProperties["marginBottom"];
    ml?: StandardCSSProperties["marginLeft"];
    mx?: StandardCSSProperties["marginLeft"];
    pos?: StandardCSSProperties["position"];
    inset?: StandardCSSProperties["left"];
    insetX?: StandardCSSProperties["left"];
    insetY?: StandardCSSProperties["top"];
    marginX?: StandardCSSProperties["marginLeft"];
    my?: StandardCSSProperties["marginTop"];
    marginY?: StandardCSSProperties["marginTop"];
    p?: StandardCSSProperties["padding"];
    pt?: StandardCSSProperties["paddingTop"];
    pr?: StandardCSSProperties["paddingRight"];
    pb?: StandardCSSProperties["paddingBottom"];
    pl?: StandardCSSProperties["paddingLeft"];
    px?: StandardCSSProperties["paddingLeft"];
    paddingX?: StandardCSSProperties["paddingLeft"];
    py?: StandardCSSProperties["paddingTop"];
    paddingY?: StandardCSSProperties["paddingTop"];
    textDecor?: StandardCSSProperties["textDecoration"];
}
interface OverwriteCSSProperties {
    boxShadow?: CSS.BoxShadowProperty | number;
    fontWeight?: CSS.FontWeightProperty | string;
    zIndex?: CSS.ZIndexProperty | string;
}
interface AllSystemCSSProperties extends Omit<CSSProperties, "boxShadow" | "fontWeight" | "zIndex" | "inset">, AliasesCSSProperties, OverwriteCSSProperties {
}
declare type SystemCSSProperties = {
    [K in keyof AllSystemCSSProperties]: string | Responsive<AllSystemCSSProperties[K]> | ((theme: any) => Responsive<AllSystemCSSProperties[K]>) | SystemStyleObject;
};
interface ApplyProperty {
    apply: string;
}
declare type PseudoStyles = {
    [K in keyof Pseudos]?: SystemStyleObject & {
        content?: string;
    };
};
export declare type SystemStyleObject = SystemCSSProperties | CSSPseudoSelectorProps | CSSSelectorObject | ApplyProperty | PseudoStyles;
export declare type StyleObjectOrFn = SystemStyleObject | ((theme: any) => SystemStyleObject);
export {};
//# sourceMappingURL=css.types.d.ts.map