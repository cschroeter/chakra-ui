import * as React from "react";
export interface CreateContextOptions {
    /**
     * If `true`, React will throw if context is `null` or `undefined`
     * In some cases, you might want to support nested context, so you can set it to `false`
     */
    strict?: boolean;
    /**
     * Error message to throw if the context is `undefined`
     */
    errorMessage?: string;
    /**
     * The display name of the context
     */
    name?: string;
}
declare type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];
/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export declare function createContext<ContextType>(options?: CreateContextOptions): CreateContextReturn<ContextType>;
/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
export declare function getValidChildren(children: React.ReactNode): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
declare type ReactRef<T> = React.Ref<T> | React.RefObject<T> | React.MutableRefObject<T>;
/**
 * Assigns a value to a ref function or object
 *
 * @param ref the ref to assign to
 * @param value the value
 */
export declare function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T): void;
/**
 * Combine multiple React refs into a single ref function.
 * This is used mostly when you need to allow consumers forward refs to
 * internal components
 *
 * @param refs refs to assign to value to
 */
export declare function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]): (value: T) => void;
export {};
//# sourceMappingURL=react-helpers.d.ts.map