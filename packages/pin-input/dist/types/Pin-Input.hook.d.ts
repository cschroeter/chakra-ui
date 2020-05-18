import * as React from "react";
export interface UsePinInputProps {
    /**
     * If `true`, the pin input receives focus on mount
     */
    autoFocus?: boolean;
    /**
     * The value of the the pin input. This is the value
     * that will be returned when the pin input is filled
     */
    value?: string;
    /**
     * The default value of the pin input
     */
    defaultValue?: string;
    /**
     * Function called on input change
     */
    onChange?: (value: string) => void;
    /**
     * Function called when all inputs have valid values
     */
    onComplete?: (value: string) => void;
    /**
     * The placeholder for the pin input
     */
    placeholder?: string;
}
export declare function usePinInput(props?: UsePinInputProps): {
    domContext: {
        descendants: {
            element: HTMLInputElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }[]; /**
         * Function called when all inputs have valid values
         */
        register: ({ element, ...rest }: {
            element: HTMLInputElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }) => void;
        unregister: (element: HTMLInputElement) => void;
    };
    setValue: (value: string, index: number) => void;
    values: string[];
    setValues: React.Dispatch<React.SetStateAction<string[]>>;
    setMoveFocus: React.Dispatch<React.SetStateAction<boolean>>;
    clear: () => void;
    onComplete: ((value: string) => void) | undefined;
    placeholder: string;
};
export declare type UsePinInputReturn = ReturnType<typeof usePinInput>;
export interface UsePinInputFieldProps {
    context: UsePinInputReturn;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: React.ChangeEventHandler;
    onKeyDown?: React.KeyboardEventHandler;
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
}
export declare function usePinInputField(props: UsePinInputFieldProps): {
    ref: (value: HTMLInputElement) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
    onFocus: (event: React.FocusEvent<Element>) => void;
    onBlur: (event: React.FocusEvent<Element>) => void;
    value: string;
    inputMode: "numeric" | "none" | "text" | "tel" | "url" | "email" | "decimal" | "search" | undefined;
    "aria-label": string;
    autoComplete: string;
    placeholder: string;
};
//# sourceMappingURL=Pin-Input.hook.d.ts.map