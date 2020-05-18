import { UseClickableProps } from "@chakra-ui/clickable";
import { Dict } from "@chakra-ui/utils";
import * as React from "react";
export interface UseTabsProps {
    /**
     * The orientation of the tab list.
     */
    orientation?: "vertical" | "horizontal";
    /**
     * If `true`, the tabs will be manually activated and
     * display its panel by pressing Space or Enter.
     *
     * If `false`, the tabs will be automatically activated
     * and their panel is displayed when they receive focus.
     */
    isManual?: boolean;
    /**
     * Callback when the index (controlled or un-controlled) changes.
     */
    onChange?: (index: number) => void;
    /**
     * The index of the selected tab (in controlled mode)
     */
    index?: number;
    /**
     * The initial index of the selected tab (in uncontrolled mode)
     */
    defaultIndex?: number;
    /**
     * The id of the tab
     */
    id?: string;
}
/**
 * Tabs hooks that provides all the states, and accessibility
 * helpers to keep all things working properly.
 *
 * It's returned object will be passed unto a Context Provider
 * so all child components can read from it.
 *
 * @see Docs https://chakra-ui.com/useTabs
 */
export declare function useTabs(props: UseTabsProps): {
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    isManual: boolean | undefined;
    orientation: "vertical" | "horizontal";
    enabledDomContext: {
        descendants: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }[];
        register: ({ element, ...rest }: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }) => void;
        unregister: (element: HTMLElement) => void;
    };
    domContext: {
        descendants: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }[];
        register: ({ element, ...rest }: {
            element: HTMLElement | null;
            index?: number | undefined;
            disabled?: boolean | undefined;
            focusable?: boolean | undefined;
        }) => void;
        unregister: (element: HTMLElement) => void;
    };
    htmlProps: {
        /**
         * The id of the tab
         */
        id?: string | undefined;
    };
};
export declare type UseTabsReturn = Omit<ReturnType<typeof useTabs>, "htmlProps">;
export interface UseTabListProps {
    children?: React.ReactNode;
    onKeyDown?: React.KeyboardEventHandler;
    ref?: React.Ref<any>;
    context: UseTabsReturn;
}
/**
 * Tabs hook to manage multiple tab buttons,
 * and ensures only one tab is selected per time.
 *
 * @param props props object for the tablist
 */
export declare function useTabList<P extends UseTabListProps>(props: P): Pick<P, Exclude<keyof P, "context">> & {
    role: string;
    "aria-orientation": "vertical" | "horizontal";
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
};
export declare type UseTabListReturn = ReturnType<typeof useTabList>;
export interface UseTabProps extends UseClickableProps {
    id?: string;
    isSelected?: boolean;
    panelId?: string;
    context: UseTabsReturn;
    onFocus?: React.FocusEventHandler;
}
/**
 * Tabs hook to manage each tab button.
 *
 * A tab can be disabled and focusable, or both,
 * hence the use of `useClickable` to handle this scenario
 */
export declare function useTab<P extends UseTabProps>(props: P): {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean | undefined;
    "aria-controls": string;
    onFocus: (event: React.FocusEvent<Element>) => void;
    ref: (value: any) => void;
    "aria-disabled": boolean | undefined;
    disabled: boolean | undefined;
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseDown: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseUp: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onKeyUp: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyDown: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onMouseOver: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-dropeffect'?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "vertical" | "horizontal" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<any>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<any>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<any>) => void) | undefined;
    onChange?: ((event: React.FormEvent<any>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<any>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onInput?: ((event: React.FormEvent<any>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onReset?: ((event: React.FormEvent<any>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<any>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<any>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<any>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<any>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<any>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<any>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<any>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<any>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<any>) => void) | undefined;
    key?: string | number | undefined;
} | {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean | undefined;
    "aria-controls": string;
    onFocus: (event: React.FocusEvent<Element>) => void;
    ref: (value: any) => void;
    "data-active": boolean | "true" | "false";
    "aria-disabled": boolean;
    onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseDown: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseUp: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onKeyUp: (event: React.KeyboardEvent<Element>) => void;
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
    onMouseOver: (event: React.MouseEvent<Element, MouseEvent>) => void;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-dropeffect'?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "vertical" | "horizontal" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions text" | "all" | "removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<any>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<any>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<any>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<any>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<any>) => void) | undefined;
    onChange?: ((event: React.FormEvent<any>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<any>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onInput?: ((event: React.FormEvent<any>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onReset?: ((event: React.FormEvent<any>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<any>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<any>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<any>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<any>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<any>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<any>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<any>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseLeave?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<any, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<any>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<any>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<any>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<any>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<any>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<any>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<any>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<any>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<any>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<any>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<any>) => void) | undefined;
    key?: string | number | undefined;
};
export interface UseTabPanelsProps {
    children?: React.ReactNode;
    context: UseTabsReturn;
}
/**
 * Tabs hook for managing the visibility of multiple tab panels.
 *
 * Since only one panel can be show at a time, we use `React.cloneElement`
 * to inject `selected` panel to each TabPanel.
 *
 * It returns a cloned version of it's children with
 * all functionality included.
 */
export declare function useTabPanels<P extends UseTabPanelsProps>(props: P): Pick<P, Exclude<keyof P, "context">> & {
    children: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
};
/**
 * Tabs hook for managing the visible/hidden states
 * of the tab panel.
 *
 * @param props props object for the tab panel
 */
export declare function useTabPanel(props: Dict): {
    role: string;
    hidden: boolean;
    id: any;
};
/**
 * Tabs hook to show an animated indicators that
 * follows the active tab.
 *
 * The way we do it is by measuring the DOM Rect (or dimensions)
 * of the active tab, and return that as CSS style for
 * the indicator.
 */
export declare function useTabIndicator(context: UseTabsReturn): React.CSSProperties;
//# sourceMappingURL=Tabs.hook.d.ts.map