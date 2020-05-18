import * as React from "react";
interface PortalManagerContext {
    node: HTMLElement;
    zIndex?: number;
}
declare const usePortalManager: () => PortalManagerContext;
export { usePortalManager };
export interface PortalManagerProps {
    /**
     * Child elements of the Portal manager
     * Ideally, it should be at the top-level
     * of your application
     */
    children?: React.ReactNode;
    /**
     * [Z-Index war] If your has multiple elements
     * with z-index clashing, you might need to
     * apply a z-index to the Portal manager
     */
    zIndex?: number;
}
/**
 * PortalManager
 *
 * Used to manage multiple portals within an application.
 * It must be render only once, at the root of your application.
 *
 * Inspired by BaseWeb's LayerManager component
 */
export declare function PortalManager(props: PortalManagerProps): JSX.Element;
export declare namespace PortalManager {
    var displayName: string;
}
//# sourceMappingURL=Portal.manager.d.ts.map