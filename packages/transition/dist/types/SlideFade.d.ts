/// <reference types="react" />
import { TransitionProps } from "./Transition";
export interface SlideFadeProps extends Omit<TransitionProps, "styles" | "timeout"> {
    /**
     * The initial offset to slide from
     */
    initialOffset?: string;
    /**
     * The transition timeout
     */
    timeout?: number;
}
export declare const SlideFade: (props: SlideFadeProps) => JSX.Element;
//# sourceMappingURL=SlideFade.d.ts.map