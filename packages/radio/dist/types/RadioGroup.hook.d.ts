import { StringOrNumber, Dict } from "@chakra-ui/utils";
import * as React from "react";
declare type EventOrValue = React.ChangeEvent<HTMLInputElement> | StringOrNumber;
export interface UseRadioGroupProps {
    /**
     * The value of the radio to be `checked`
     * (in controlled mode)
     */
    value?: StringOrNumber;
    /**
     * The value of the radio to be `checked`
     * initially (in uncontrolled mode)
     */
    defaultValue?: StringOrNumber;
    /**
     * Function called once a radio is checked
     * @param nextValue the value of the checked radio
     */
    onChange?(nextValue: StringOrNumber): void;
    /**
     * The `name` attribute forwarded to each `radio` element
     */
    name?: string;
    /**
     * If `true`, input elements will receive
     * `checked` attribute instead of `isChecked`.
     *
     * This assumes, you're using native radio inputs
     */
    isNative?: boolean;
}
/**
 * React hook to manage a group of radio inputs
 */
export declare function useRadioGroup(props?: UseRadioGroupProps): {
    getRootProps: (props?: Dict) => {
        ref: (value: any) => void;
        role: string;
    };
    getRadioProps: (props?: Dict) => {
        [x: string]: any;
        name: string;
        onChange: (eventOrValue: EventOrValue) => void;
    };
    name: string;
    ref: React.MutableRefObject<any>;
    focus: () => void;
    setValue: React.Dispatch<React.SetStateAction<string | number>>;
    value: string | number;
    onChange: (eventOrValue: EventOrValue) => void;
    htmlProps: {};
};
export declare type UseRadioGroupReturn = ReturnType<typeof useRadioGroup>;
export {};
//# sourceMappingURL=RadioGroup.hook.d.ts.map