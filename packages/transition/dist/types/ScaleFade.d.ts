/// <reference types="react" />
import { TransitionProps } from "./Transition";
export declare type ScaleFadeProps = Omit<TransitionProps, "styles" | "timeout"> & {
    /** The initial scale to animate from */
    initialScale?: number;
    /** The transition timeout */
    timeout?: number;
};
export declare const ScaleFade: (props: ScaleFadeProps) => JSX.Element;
//# sourceMappingURL=ScaleFade.d.ts.map