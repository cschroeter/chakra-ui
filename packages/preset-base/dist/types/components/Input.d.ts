import { ComponentTheme } from "./utils";
export interface InputProps {
    focusBorderColor?: string;
    errorBorderColor?: string;
}
export declare type InputTheme = ComponentTheme<InputProps>;
declare const Input: InputTheme;
export declare const InputTokens: {
    sizes: {
        sm: string;
        md: string;
        lg: string;
    };
    variants: {
        outline: string;
        filled: string;
        flushed: string;
        unstyled: string;
    };
};
export default Input;
//# sourceMappingURL=Input.d.ts.map