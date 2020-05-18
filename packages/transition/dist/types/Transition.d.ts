import * as React from "react";
import { EndHandler, EnterHandler, TransitionStatus, ExitHandler, TransitionProps as TProps } from "react-transition-group/Transition";
export interface TransitionProps {
    in?: boolean;
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
    unmountOnExit?: boolean;
    timeout?: TProps["timeout"];
    transition?: string;
    children: (styles: React.CSSProperties) => React.ReactNode;
    styles: TransitionStyles;
}
export declare type TransitionStyleState = "init" | "entered" | "exiting";
export declare type TransitionStyles = {
    [K in TransitionStyleState]?: React.CSSProperties;
};
export { TransitionStatus };
export declare function Transition(props: TransitionProps): JSX.Element;
//# sourceMappingURL=Transition.d.ts.map