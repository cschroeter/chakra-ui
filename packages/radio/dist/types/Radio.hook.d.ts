import { Dict } from "@chakra-ui/utils";
import { ChangeEvent } from "react";
/**
 * @todo use the `useClickable` hook here
 * to manage the isFocusable & isDisabled props
 */
export interface UseRadioProps {
    /**
     * id assigned to input
     */
    id?: string;
    /**
     * The name of the input field in a radio
     * (Useful for form submission).
     */
    name?: string;
    /**
     * The value to be used in the radio button.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * If `true`, the radio will be checked.
     * You'll need to pass `onChange` to update it's value (since it's now controlled)
     */
    isChecked?: boolean;
    /**
     * If `true`, the radio will be initially checked.
     */
    defaultIsChecked?: boolean;
    /**
     * If `true`, the radio will be disabled
     */
    isDisabled?: boolean;
    /**
     * If `true` and `isDisabled` is true, the radio will remain
     * focusable but not interactive.
     */
    isFocusable?: boolean;
    /**
     * If `true`, the radio will be read-only
     */
    isReadOnly?: boolean;
    /**
     * If `true`, the radio button will be invalid. This sets `aria-invalid` to `true`.
     */
    isInvalid?: boolean;
    /**
     * If `true`, the radio button will be invalid. This sets `aria-invalid` to `true`.
     */
    isRequired?: boolean;
    /**
     * Function called when checked state of the `input` changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export declare function useRadio(props?: UseRadioProps): {
    state: {
        isInvalid: boolean | undefined;
        isFocused: boolean;
        isChecked: boolean;
        isActive: boolean;
        isHovered: boolean;
        isDisabled: boolean | undefined;
        isReadOnly: boolean | undefined;
        isRequired: boolean | undefined;
    };
    getCheckboxProps: (props?: Dict) => {
        "data-active": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-hover": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-disabled": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-invalid": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-checked": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-focus": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-readonly": import("@chakra-ui/utils/dist/types").Booleanish;
        "aria-hidden": boolean;
        onMouseDown: (event: unknown) => void;
        onMouseUp: (event: unknown) => void;
        onMouseEnter: (event: unknown) => void;
        onMouseLeave: (event: unknown) => void;
    };
    getInputProps: (props?: Dict) => {
        ref: (value: HTMLInputElement) => void;
        type: string;
        name: string | undefined;
        value: string | number | undefined;
        id: string | undefined;
        onChange: (event: unknown) => void;
        onBlur: (event: unknown) => void;
        onFocus: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
        onKeyUp: (event: unknown) => void;
        "aria-required": true | undefined;
        checked: boolean;
        disabled: boolean | undefined;
        readOnly: boolean | undefined;
        "aria-invalid": true | undefined;
        "aria-disabled": true | undefined;
        style: import("react").CSSProperties;
    };
    getLabelProps: (props?: Dict) => {
        style: any;
        onMouseDown: (event: unknown) => void;
        onTouchStart: (event: unknown) => void;
        "data-disabled": import("@chakra-ui/utils/dist/types").Booleanish;
        " data-checked": import("@chakra-ui/utils/dist/types").Booleanish;
        "data-invalid": import("@chakra-ui/utils/dist/types").Booleanish;
    };
    htmlProps: {};
};
export declare type UseRadioReturn = ReturnType<typeof useRadio>;
//# sourceMappingURL=Radio.hook.d.ts.map