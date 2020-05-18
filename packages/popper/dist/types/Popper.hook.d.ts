import * as React from "react";
import { Placement, Instance, Modifier } from "@popperjs/core";
export { Placement };
export interface UsePopperProps {
    gutter?: number;
    placement?: Placement;
    offset?: number;
    preventOverflow?: boolean;
    fixed?: boolean;
    forceUpdate?: boolean;
    flip?: boolean;
    arrowSize?: number;
    eventsEnabled?: boolean;
    modifiers?: Modifier<any>[];
}
export declare function usePopper(props: UsePopperProps): {
    popperInstance: Instance | null;
    reference: {
        ref: React.RefObject<HTMLButtonElement>;
    };
    popper: {
        ref: React.RefObject<HTMLDivElement>;
        style: React.CSSProperties;
    };
    arrow: {
        ref: React.RefObject<HTMLDivElement>;
        style: React.CSSProperties;
    };
    update: () => boolean;
    placement: Placement;
    place: React.Dispatch<React.SetStateAction<Placement>>;
};
export declare type UsePopperReturn = ReturnType<typeof usePopper>;
//# sourceMappingURL=Popper.hook.d.ts.map