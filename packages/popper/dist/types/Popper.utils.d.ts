/// <reference types="react" />
import { Placement } from "@popperjs/core";
declare const oppositeDirections: {
    top: string;
    bottom: string;
    right: string;
    left: string;
};
declare type Direction = keyof typeof oppositeDirections;
export declare const getOppositePosition: (position: Direction) => string;
export declare function getArrowStyles(placement: Placement, arrowSize: number): React.CSSProperties;
export {};
//# sourceMappingURL=Popper.utils.d.ts.map