declare type InitialValue<T> = T | (() => T);
/**
 * React hook that returns a constant value.
 * It always returns the very first value passed to `initialState`,
 * even if it changes between re-renders.
 *
 * @param initialValue the initial value
 */
export declare function useConst<T>(initialValue: InitialValue<T>): T;
export {};
//# sourceMappingURL=useConst.d.ts.map