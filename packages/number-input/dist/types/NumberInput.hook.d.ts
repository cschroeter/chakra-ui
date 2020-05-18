import { UseCounterProps } from "@chakra-ui/counter";
import { Dict, StringOrNumber } from "@chakra-ui/utils";
export interface UseNumberInputProps extends UseCounterProps {
    /**
     * If `true`, the input will be focused as you increment
     * or decrement the value with the stepper
     *
     * @default true
     */
    focusInputOnChange?: boolean;
    /**
     * This controls the value update when you blur out of the input.
     * - If `true` and the value is greater than `max`, the value will be reset to `max`
     * - Else, the value remains the same.
     *
     * @default true
     */
    clampValueOnBlur?: boolean;
    /**
     * This is used to format the value so that screen readers
     * can speak out a more human-friendly value.
     *
     * It is used to set the `aria-valuetext` property of the input
     */
    getAriaValueText?(value: StringOrNumber): string;
    /**
     * If `true`, the input will be in readonly mode
     */
    isReadOnly?: boolean;
    /**
     * If `true`, the input will have `aria-invalid` set to `true`
     */
    isInvalid?: boolean;
    /**
     * If `true`, the input will be disabled
     */
    isDisabled?: boolean;
    /**
     * The `id` to use for the number input field.
     */
    id?: string;
}
/**
 * React hook that implements the WAI-ARIA Spin Button widget
 * and used to create numeric input fields.
 *
 * It returns prop getters you can use to build your own
 * custom number inputs.
 *
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
 * @see Docs     https://www.chakra-ui.com/useNumberInput
 * @see WHATWG   https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number)
 */
export declare function useNumberInput(props?: UseNumberInputProps): {
    value: StringOrNumber;
    valueAsNumber: number;
    isFocused: boolean;
    isDisabled: boolean | undefined;
    isReadOnly: boolean | undefined;
    getIncrementButtonProps: (props?: Dict) => {
        role: string;
        tabIndex: number;
        onMouseDown: (event: unknown) => void;
        onMouseUp: (event: unknown) => void;
        onMouseLeave: (event: unknown) => void;
        onTouchStart: (event: unknown) => void;
        onTouchEnd: (event: unknown) => void;
        disabled: boolean;
        "aria-disabled": true | undefined;
    };
    getDecrementButtonProps: (props?: Dict) => {
        role: string;
        tabIndex: number;
        onMouseDown: (event: unknown) => void;
        onMouseLeave: (event: unknown) => void;
        onMouseUp: (event: unknown) => void;
        onTouchStart: (event: unknown) => void;
        onTouchEnd: (event: unknown) => void;
        disabled: boolean;
        "aria-disabled": true | undefined;
    };
    getInputProps: (props?: Dict) => {
        id: string | undefined;
        ref: (value: HTMLInputElement) => void;
        value: StringOrNumber;
        role: string;
        type: string;
        inputMode: any;
        pattern: string;
        "aria-valuemin": number;
        "aria-valuemax": number;
        "aria-disabled": boolean | undefined;
        "aria-valuenow": number | undefined;
        "aria-invalid": boolean;
        "aria-valuetext": string | undefined;
        readOnly: boolean | undefined;
        disabled: boolean | undefined;
        autoComplete: string;
        autoCorrect: string;
        onChange: (event: unknown) => void;
        onKeyDown: (event: unknown) => void;
        onFocus: (event: unknown) => void;
        onBlur: (event: unknown) => void;
    };
    htmlProps: {
        precision?: number | undefined;
        defaultValue?: string | number | undefined;
        value?: string | number | undefined;
    };
};
export declare type UseNumberInputReturn = ReturnType<typeof useNumberInput>;
//# sourceMappingURL=NumberInput.hook.d.ts.map