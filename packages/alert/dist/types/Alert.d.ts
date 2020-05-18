import { CheckCircleIcon, InfoIcon, WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { PropsOf } from "@chakra-ui/system";
import * as React from "react";
export declare const ALERT_STATUSES: {
    info: {
        icon: typeof InfoIcon;
        color: string;
    };
    warning: {
        icon: typeof WarningTwoIcon;
        color: string;
    };
    success: {
        icon: typeof CheckCircleIcon;
        color: string;
    };
    error: {
        icon: typeof WarningIcon;
        color: string;
    };
};
interface AlertOptions {
    /**
     * The status of the alert
     */
    status?: keyof typeof ALERT_STATUSES;
    /**
     * The variant of the alert style to use.
     */
    variant?: string;
}
export declare type AlertProps = PropsOf<typeof StyledAlert> & AlertOptions;
declare const StyledAlert: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
/**
 * Alert
 *
 * React component used to communicate the state or status of a
 * page, feature or action
 */
export declare const Alert: React.ForwardRefExoticComponent<Pick<AlertProps, "p" | "style" | "title" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_indeterminate" | "_groupHover" | "_groupFocus" | "_groupActive" | "_groupDisabled" | "_groupInvalid" | "_groupChecked" | "_placeholder" | "_fullScreen" | "_selection" | "flex" | "hidden" | "className" | "color" | "height" | "id" | "lang" | "width" | "role" | "tabIndex" | "cursor" | "d" | "display" | "fill" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "order" | "orientation" | "overflow" | "pointerEvents" | "stroke" | "textDecoration" | "transform" | "visibility" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "key" | "sx" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "placeholder" | "slot" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "size" | "left" | "right" | "top" | "bottom" | "as" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "padding" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY" | "textColor" | "lineHeight" | "textAlign" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "textDecor" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexBasis" | "flexDirection" | "flexDir" | "justifySelf" | "alignSelf" | "flexGrow" | "flexShrink" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "placeItems" | "w" | "boxSize" | "maxWidth" | "maxW" | "minWidth" | "minW" | "h" | "maxHeight" | "maxH" | "minHeight" | "minH" | "verticalAlign" | "overflowX" | "overflowY" | "boxSizing" | "border" | "borderWidth" | "borderStyle" | "borderColor" | "borderRadius" | "borderTop" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderTopStyle" | "borderBottomStyle" | "borderLeftStyle" | "borderRightStyle" | "borderTopColor" | "borderBottomColor" | "borderLeftColor" | "borderRightColor" | "borderRight" | "borderBottom" | "borderLeft" | "borderTopRadius" | "borderRightRadius" | "borderBottomRadius" | "borderLeftRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderX" | "borderY" | "boxShadow" | "textShadow" | "bg" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "backgroundBlendMode" | "bgBlendMode" | "backgroundSize" | "backgroundPosition" | "bgImage" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "zIndex" | "inset" | "insetX" | "insetY" | "pos" | "position" | "outline" | "outlineOffset" | "outlineColor" | "animation" | "appearance" | "transformOrigin" | "userSelect" | "resize" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "objectFit" | "objectPosition" | "float" | "willChange" | "listStyleType" | "listStylePosition" | "listStyleImage" | "isTruncated" | "noOfLines" | "htmlWidth" | "htmlHeight" | "htmlSize" | "variant" | "colorScheme" | "apply" | "layerStyle" | "textStyle" | "status"> & React.RefAttributes<any>>;
export declare type AlertTitleProps = PropsOf<typeof AlertTitle>;
export declare const AlertTitle: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
/**
 * AlertDescription
 *
 * The description of the alert to be announced by screen
 * readers.
 */
export declare const AlertDescription: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
declare const StyledWrapper: import("@chakra-ui/system/dist/types").ChakraComponent<"span", {}>;
export declare type AlertIconProps = PropsOf<typeof StyledWrapper>;
/**
 * AlertIcon
 *
 * The visual icon for the alert that changes based on the `status` prop.
 */
export declare const AlertIcon: (props: AlertIconProps) => JSX.Element;
export {};
//# sourceMappingURL=Alert.d.ts.map