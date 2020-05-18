/// <reference types="react" />
import { TransitionProps } from "./Transition";
export declare type FadeProps = Omit<TransitionProps, "styles" | "timeout"> & {
    timeout?: number;
};
export declare function Fade(props: FadeProps): JSX.Element;
export default Fade;
//# sourceMappingURL=Fade.d.ts.map