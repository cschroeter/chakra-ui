import * as React from "react";
import { StringOrNumber, Dict } from "@chakra-ui/utils";
declare type EventOrValue = React.ChangeEvent<HTMLInputElement> | StringOrNumber;
export interface UseCheckboxGroupProps {
    /**
     * The value of the checkbox group
     */
    value?: StringOrNumber[];
    /**
     * The initial value of the checkbox group
     */
    defaultValue?: StringOrNumber[];
    /**
     * The callback fired when any children Checkbox is checked or unchecked
     */
    onChange?(value: StringOrNumber[]): void;
    /**
     * If `true`, input elements will receive
     * `checked` attribute instead of `isChecked`.
     *
     * This assumes, you're using native radio inputs
     */
    isNative?: boolean;
}
/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
export declare function useCheckboxGroup(props?: UseCheckboxGroupProps): {
    value: (string | number)[];
    onChange: (eventOrValue: EventOrValue) => void;
    setValue: (nextState: StringOrNumber[]) => void;
    getCheckboxProps: (props?: Dict) => {
        [x: string]: any;
        onChange: (eventOrValue: EventOrValue) => void;
    };
};
export declare type UseCheckboxGroupReturn = ReturnType<typeof useCheckboxGroup>;
export {};
//# sourceMappingURL=CheckboxGroup.hook.d.ts.map