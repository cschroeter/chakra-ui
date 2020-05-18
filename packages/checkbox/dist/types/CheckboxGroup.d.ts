import { ThemingProps } from "@chakra-ui/system";
import * as React from "react";
import { UseCheckboxGroupProps, UseCheckboxGroupReturn } from "./CheckboxGroup.hook";
export declare type CheckboxGroupProps = UseCheckboxGroupProps & Omit<ThemingProps, "orientation"> & {
    children?: React.ReactNode;
};
export declare type CheckboxGroupContext = Pick<UseCheckboxGroupReturn, "onChange" | "value"> & Omit<ThemingProps, "orientation">;
declare const useCheckboxGroupContext: () => CheckboxGroupContext;
export { useCheckboxGroupContext };
/**
 * Used for multiple checkboxes which are bound in one group,
 * and it indicates whether one or more options are selected.
 *
 * @see Docs https://chakra-ui.com/checkbox
 */
export declare function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
export declare namespace CheckboxGroup {
    var displayName: string;
}
//# sourceMappingURL=CheckboxGroup.d.ts.map