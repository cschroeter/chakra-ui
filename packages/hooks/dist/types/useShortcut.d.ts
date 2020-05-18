/// <reference types="react" />
export interface ShortcutHookProps {
    timeout?: number;
    preventDefault?: (event: React.KeyboardEvent) => boolean;
}
declare type Callback = (keysSoFar: string) => void;
/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 *
 * @param props the shortcut options
 */
export declare function useShortcut(props?: ShortcutHookProps): (callback: Callback) => (event: React.KeyboardEvent) => void;
export {};
//# sourceMappingURL=useShortcut.d.ts.map