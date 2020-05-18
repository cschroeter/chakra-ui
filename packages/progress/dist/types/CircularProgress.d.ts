import * as React from "react";
import { PropsOf } from "@chakra-ui/system";
import { StringOrNumber } from "@chakra-ui/utils";
interface CircularProgressOptions {
    /**
     * The size of the circular progress in CSS units
     */
    size?: StringOrNumber;
    /**
     * Maximum value defining 100% progress made (must be higher than 'min')
     */
    max?: number;
    /**
     * Minimum value defining 'no progress' (must be lower than 'max')
     */
    min?: number;
    /**
     * The thickness of progress indicator as a ratio of `size`. Must be between `0` and `1`
     */
    thickness?: StringOrNumber;
    /**
     * Current progress (must be between min/max)
     */
    value?: number;
    /**
     * If `true`, the cap of the progress indicator will be rounded.
     */
    capIsRound?: boolean;
    /**
     * The content of the circular progress bar. If passed, the content will be inside and centered in the progress bar.
     */
    children?: React.ReactNode;
    /**
     * The color name of the progress track. Use a color key in the theme object
     */
    trackColor?: string;
    /**
     * The color of the progress indicator. Use a color key in the theme object
     */
    color?: string;
    /**
     * The desired valueText to use in place of the value
     */
    valueText?: string;
    /**
     * A function that returns the desired valueText to use in place of the value
     */
    getValueText?(value?: number, percent?: number): string;
}
declare const StyledProgress: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
export declare type CircularProgressProps = PropsOf<typeof StyledProgress> & CircularProgressOptions;
/**
 * React component used to indicate the progress of an activity.
 *
 * It's built using `svg` and `circle` components with support for
 * theming and `indeterminate` state
 *
 * @see Docs https://chakra-ui.com/progress
 *
 * @todo add theming support for circular progress
 */
export declare function CircularProgress(props: CircularProgressProps): JSX.Element;
export declare namespace CircularProgress {
    var displayName: string;
}
/**
 * CircularProgressLabel
 *
 * CircularProgress component label. In most cases it's a numeric indicator
 * of the circular progress component's value
 */
export declare const CircularProgressLabel: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
export declare type CircularProgressLabelProps = PropsOf<typeof CircularProgressLabel>;
export {};
//# sourceMappingURL=CircularProgress.d.ts.map