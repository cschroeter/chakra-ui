import * as React from "react";
export interface PortalProps {
    /**
     * Function called when the portal mounts
     */
    onMount?(): void;
    /**
     * Function called when the portal unmounts
     */
    onUnmount?(): void;
    /**
     * Function that will be called to get the parent element
     * that the portal will be attached to.
     */
    getContainer?: () => HTMLElement;
    /**
     * The content or node you'll like to portal
     */
    children?: React.ReactNode;
}
/**
 * Portal
 *
 * Declarative component used to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @see Docs https://chakra-ui.com/portal
 */
export declare function Portal(props: PortalProps): JSX.Element;
export declare namespace Portal {
    var displayName: string;
}
//# sourceMappingURL=Portal.d.ts.map