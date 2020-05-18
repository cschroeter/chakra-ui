/// <reference types="react" />
import { TransitionProps } from "./Transition";
export declare type Placement = "left" | "right" | "bottom" | "top";
export declare type SlideProps = Omit<TransitionProps, "styles" | "timeout"> & {
    /** The direction to slide drawer from */
    placement?: Placement;
    /** The transition timeout */
    timeout?: number;
};
export declare function Slide(props: SlideProps): JSX.Element;
export default Slide;
//# sourceMappingURL=Slide.d.ts.map