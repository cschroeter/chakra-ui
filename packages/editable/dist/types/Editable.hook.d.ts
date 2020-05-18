import { Dict } from "@chakra-ui/utils";
import { PropsOf } from "@chakra-ui/system";
export interface UseEditableProps {
    /**
     * The value of the Editable in both edit & preview mode
     */
    value?: string;
    /**
     * The initial value of the Editable in both edit & preview mode
     */
    defaultValue?: string;
    /**
     * If `true`, the Editable will be disabled.
     */
    isDisabled?: boolean;
    /**
     * If `true`, the Editable will start with edit mode by default.
     */
    startWithEditView?: boolean;
    /**
     * If `true`, the read only view, has a `tabIndex` set to `0`
     * so it can recieve focus via the keyboard or click.
     * @default true
     */
    isPreviewFocusable?: boolean;
    /**
     * If `true`, it'll update the value onBlur and turn off the edit mode.
     * @default true
     */
    submitOnBlur?: boolean;
    /**
     * Callback invoked when user changes input.
     */
    onChange?: (nextValue: string) => void;
    /**
     * Callback invoked when user cancels input with the `Esc` key.
     * It provides the last confirmed value as argument.
     */
    onCancel?: (previousValue: string) => void;
    /**
     * Callback invoked when user confirms value with `enter` key or by blurring input.
     */
    onSubmit?: (nextValue: string) => void;
    /**
     * Callback invoked once the user enters edit mode.
     */
    onEdit?: () => void;
    /**
     * If `true`, the input's text will be highlighted on focus.
     * @default true
     */
    selectAllOnFocus?: boolean;
    /**
     * The placeholder text when the value is empty.
     */
    placeholder?: string;
}
/**
 * React hook for managing the inline renaming of some text.
 *
 * @see Docs https://chakra-ui.com/useEditable
 */
export declare function useEditable(props?: UseEditableProps): {
    isEditing: boolean;
    isDisabled: boolean | undefined;
    isValueEmpty: boolean;
    value: string;
    onEdit: () => void;
    onCancel: () => void;
    onSubmit: () => void;
    getPreviewProps: (props?: Dict) => {
        ref: (value: any) => void;
        children: string | undefined;
        hidden: boolean;
        "aria-disabled": true | undefined;
        tabIndex: number | undefined;
        onFocus: (event: unknown) => void;
    };
    getInputProps: (props?: Dict) => {
        hidden: boolean;
        placeholder: string | undefined;
        ref: (value: HTMLInputElement) => void;
        disabled: boolean | undefined;
        "aria-disabled": true | undefined;
        value: string;
        onBlur: (event: unknown) => void;
        onChange: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
    };
    getEditButtonProps: (props?: Dict) => PropsOf<"button">;
    getSubmitButtonProps: (props?: Dict) => PropsOf<"button">;
    getCancelButtonProps: (props?: Dict) => PropsOf<"button">;
    htmlProps: {};
};
export declare type UseEditableReturn = ReturnType<typeof useEditable>;
//# sourceMappingURL=Editable.hook.d.ts.map