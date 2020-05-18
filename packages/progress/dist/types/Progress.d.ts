/// <reference types="react" />
import { chakra, PropsOf } from "@chakra-ui/system";
import { GetProgressPropsOptions } from "./Progress.utils";
/**
 * ProgressLabel (Linear)
 *
 * Progress component used to show the numeric value of the progress.
 *
 * To style this component globally, change the styles in `theme.components.Progress`
 * under the `Label` key
 *
 * @see Docs https://chakra-ui.com/progress
 */
export declare const ProgressLabel: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
export declare type ProgressLabelProps = PropsOf<typeof ProgressLabel>;
export declare type ProgressIndicatorProps = PropsOf<typeof chakra.div> & GetProgressPropsOptions;
export declare type ProgressTrackProps = PropsOf<typeof chakra.div>;
interface ProgressOptions {
    /**
     * The `value` of the progress indicator.
     * If `undefined` the progress bar will be in `indeterminate` state
     */
    value?: number;
    /**
     * The minimum value of the progress
     */
    min?: number;
    /**
     * The maximum value of the progress
     */
    max?: number;
    /**
     * If `true`, the progress bar will show stripe
     */
    hasStripe?: boolean;
    /**
     * If `true`, and hasStripe is `true`, the stripes will be animated
     */
    isAnimated?: boolean;
}
export declare type ProgressProps = ProgressOptions & PropsOf<typeof chakra.div>;
/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 *
 * @see Docs https://chakra-ui.com/progress
 */
export declare function Progress(props: ProgressProps): JSX.Element;
export declare namespace Progress {
    var displayName: string;
}
export {};
//# sourceMappingURL=Progress.d.ts.map