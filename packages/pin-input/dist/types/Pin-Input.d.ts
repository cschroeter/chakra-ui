import { PropsOf, ThemingProps } from "@chakra-ui/system";
import * as React from "react";
import { UsePinInputProps, UsePinInputReturn } from "./Pin-Input.hook";
export declare type PinInputContext = UsePinInputReturn & ThemingProps & {
    /**
     * Sets the pin input component to the disabled state
     */
    isDisabled?: boolean;
    /**
     * Sets the pin input component to the invalid state
     */
    isInvalid?: boolean;
};
export declare type PinInputProps = UsePinInputProps & ThemingProps & {
    /**
     * The children of the pin input component
     */
    children: React.ReactNode;
    /**
     * If `true`, the pin input component is put in the disabled state
     */
    isDisabled?: boolean;
    /**
     * If `true`, the pin input component is put in the invalid state
     */
    isInvalid?: boolean;
};
export declare function PinInput(props: PinInputProps): JSX.Element;
export declare namespace PinInput {
    var displayName: string;
}
export declare type PinInputFieldProps = Omit<PropsOf<typeof StyledInput>, "size"> & {
    size?: string;
};
interface InputOptions {
    /**
     * The border color when the input is focused. Use color keys in `theme.colors`
     * @example
     * focusBorderColor = "blue.500"
     */
    focusBorderColor?: string;
    /**
     * The border color when the input is invalid. Use color keys in `theme.colors`
     * @example
     * errorBorderColor = "red.500"
     */
    errorBorderColor?: string;
}
declare const StyledInput: import("@chakra-ui/system/dist/types").ChakraComponent<"input", InputOptions>;
export declare const PinInputField: React.ForwardRefExoticComponent<Pick<PinInputFieldProps, "autoFocus" | "value" | "defaultValue" | "onChange" | "placeholder" | "onKeyDown" | "onFocus" | "onBlur" | "inputMode" | "children" | "size" | "variant" | "colorScheme" | "form" | "p" | "style" | "title" | "pattern" | "focusBorderColor" | "errorBorderColor" | "className" | "color" | "height" | "id" | "lang" | "max" | "min" | "name" | "type" | "width" | "role" | "tabIndex" | "crossOrigin" | "cursor" | "d" | "display" | "fill" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "order" | "orientation" | "overflow" | "pointerEvents" | "stroke" | "textDecoration" | "transform" | "visibility" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocusCapture" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "key" | "sx" | "defaultChecked" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "slot" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "is" | "alt" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "autoComplete" | "src" | "accept" | "capture" | "checked" | "list" | "maxLength" | "minLength" | "multiple" | "readOnly" | "required" | "step" | "left" | "right" | "top" | "bottom" | "as" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_indeterminate" | "_groupHover" | "_groupFocus" | "_groupActive" | "_groupDisabled" | "_groupInvalid" | "_groupChecked" | "_placeholder" | "_fullScreen" | "_selection" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "padding" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY" | "textColor" | "lineHeight" | "textAlign" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "textDecor" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexBasis" | "flexDirection" | "flexDir" | "flex" | "justifySelf" | "alignSelf" | "flexGrow" | "flexShrink" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "placeItems" | "w" | "boxSize" | "maxWidth" | "maxW" | "minWidth" | "minW" | "h" | "maxHeight" | "maxH" | "minHeight" | "minH" | "verticalAlign" | "overflowX" | "overflowY" | "boxSizing" | "border" | "borderWidth" | "borderStyle" | "borderColor" | "borderRadius" | "borderTop" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderTopStyle" | "borderBottomStyle" | "borderLeftStyle" | "borderRightStyle" | "borderTopColor" | "borderBottomColor" | "borderLeftColor" | "borderRightColor" | "borderRight" | "borderBottom" | "borderLeft" | "borderTopRadius" | "borderRightRadius" | "borderBottomRadius" | "borderLeftRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderX" | "borderY" | "boxShadow" | "textShadow" | "bg" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "backgroundBlendMode" | "bgBlendMode" | "backgroundSize" | "backgroundPosition" | "bgImage" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "zIndex" | "inset" | "insetX" | "insetY" | "pos" | "position" | "outline" | "outlineOffset" | "outlineColor" | "animation" | "appearance" | "transformOrigin" | "userSelect" | "resize" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "objectFit" | "objectPosition" | "float" | "willChange" | "listStyleType" | "listStylePosition" | "listStyleImage" | "isTruncated" | "noOfLines" | "htmlWidth" | "htmlHeight" | "htmlSize" | "apply" | "layerStyle" | "textStyle"> & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Pin-Input.d.ts.map