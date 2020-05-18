import * as React from "react";
declare type EventKeys = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight" | "Enter" | "Space" | "Tab" | "Backspace" | "Control" | "Meta" | "Home" | "End" | "PageDown" | "PageUp" | "Delete" | "Escape" | " " | "Shift";
declare type KeyMapReturn = (event: React.KeyboardEvent) => any;
declare type KeyMap = Partial<Record<EventKeys, KeyMapReturn>>;
export interface CreateOnKeyDownOptions {
    keyMap?: KeyMap;
    onKey?: (event: React.KeyboardEvent) => any;
    preventDefault?: boolean | ((event: React.KeyboardEvent) => boolean);
    stopPropagation?: boolean | ((event: React.KeyboardEvent) => boolean);
    onKeyDown?: (event: React.KeyboardEvent) => void;
    shouldKeyDown?: (event: React.KeyboardEvent) => boolean;
}
export declare function createOnKeyDown(options: CreateOnKeyDownOptions): (event: React.KeyboardEvent) => void;
export {};
//# sourceMappingURL=keydown.d.ts.map