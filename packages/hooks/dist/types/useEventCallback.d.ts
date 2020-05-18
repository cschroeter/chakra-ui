import * as React from "react";
/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export declare function useEventCallback<E extends Event | React.SyntheticEvent>(callback: (event: E, ...args: any[]) => void): (event: E, ...args: any[]) => void;
//# sourceMappingURL=useEventCallback.d.ts.map