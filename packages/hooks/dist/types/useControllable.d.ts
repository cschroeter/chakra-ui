import { SetStateAction, Dispatch } from "react";
export declare function useControllableProp<T>(propValue: T | undefined, stateValue: T): readonly [boolean, T];
export interface UseControllableStateProps<T> {
    /**
     * The value to used in controlled mode
     */
    value?: T;
    /**
     * The initial value to be used, in uncontrolled mode
     */
    defaultValue?: T | (() => T);
    /**
     * The callback fired when the value changes
     */
    onChange?: (nextValue: T) => void;
    /**
     * The condition to update the state
     */
    shouldUpdate?: (prevState: T, state: T) => boolean;
    /**
     * The component name (for warnings)
     */
    name?: string;
    /**
     * A mapping for the props to give more contextual warning messages.
     *
     * In some components `value` might be called `index`, and defaultValue
     * might be called `defaultIndex`, so this map helps us generate
     * contextual warning messages
     */
    propsMap?: {
        value?: string;
        defaultValue?: string;
        onChange?: string;
    };
}
/**
 * React hook for using controlling component state.
 * @param props
 */
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, Dispatch<SetStateAction<T>>];
//# sourceMappingURL=useControllable.d.ts.map