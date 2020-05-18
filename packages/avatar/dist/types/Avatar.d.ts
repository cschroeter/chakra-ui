import { PropsOf, SystemProps } from "@chakra-ui/system";
import * as React from "react";
interface AvatarOptions {
    /**
     * The name of the person in the avatar.
     *
     * - if `src` has loaded, the name will be used as the `alt` attribute of the `img`
     * - If `src` is not loaded, the name will be used to create the initials
     */
    name?: string;
    /**
     * The size of the avatar.
     */
    size?: string;
    /**
     * If `true`, the `Avatar` will show a border around it.
     *
     * Best for a group of avatars
     */
    showBorder?: boolean;
    /**
     * The badge at the bottom right corner of the avatar.
     */
    children?: React.ReactNode;
    /**
     * The image url of the `Avatar`
     */
    src?: string;
    /**
     * List of sources to use for different screen resolutions
     */
    srcSet?: string;
    /**
     * The border color of the avatar
     */
    borderColor?: SystemProps["borderColor"];
    /**
     * Function called when image failed to load
     */
    onError?(): void;
    /**
     * The default avatar used as fallback when `name`, and `src`
     * is not specified.
     */
    icon?: React.ReactElement;
    /**
     * Function to get the initials to display
     */
    getInitials?(name?: string): string;
}
/**
 * AvatarBadge
 *
 * React component used to show extra badge to the top-right
 * or bottom-right corner of an avatar.
 */
export declare const AvatarBadge: import("@chakra-ui/system/dist/types").ChakraComponent<"div", {}>;
export declare type AvatarBadgeProps = PropsOf<typeof AvatarBadge>;
export declare const baseStyle: SystemProps;
/**
 * Theming
 *
 * To style the avatar globally, change the styles in
 * `theme.components.Avatar` under the `Root` key
 */
declare const StyledAvatar: import("@chakra-ui/system/dist/types").ChakraComponent<"span", {
    name?: string | undefined;
}>;
export declare type AvatarProps = PropsOf<typeof StyledAvatar> & AvatarOptions;
/**
 * Avatar
 *
 * React component that renders an user avatar with
 * support for fallback avatar and name-only avatars
 */
export declare const Avatar: React.ForwardRefExoticComponent<Pick<AvatarProps, "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_indeterminate" | "_groupHover" | "_groupFocus" | "_groupActive" | "_groupDisabled" | "_groupInvalid" | "_groupChecked" | "_placeholder" | "_fullScreen" | "_selection" | "borderColor" | "p" | "style" | "title" | "flex" | "left" | "right" | "className" | "color" | "height" | "id" | "lang" | "name" | "width" | "role" | "tabIndex" | "cursor" | "d" | "display" | "fill" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "order" | "orientation" | "overflow" | "pointerEvents" | "stroke" | "textDecoration" | "transform" | "visibility" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "key" | "sx" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "placeholder" | "slot" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "src" | "srcSet" | "size" | "top" | "bottom" | "as" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "padding" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY" | "textColor" | "lineHeight" | "textAlign" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "textDecor" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexBasis" | "flexDirection" | "flexDir" | "justifySelf" | "alignSelf" | "flexGrow" | "flexShrink" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "placeItems" | "w" | "boxSize" | "maxWidth" | "maxW" | "minWidth" | "minW" | "h" | "maxHeight" | "maxH" | "minHeight" | "minH" | "verticalAlign" | "overflowX" | "overflowY" | "boxSizing" | "border" | "borderWidth" | "borderStyle" | "borderRadius" | "borderTop" | "borderTopWidth" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderTopStyle" | "borderBottomStyle" | "borderLeftStyle" | "borderRightStyle" | "borderTopColor" | "borderBottomColor" | "borderLeftColor" | "borderRightColor" | "borderRight" | "borderBottom" | "borderLeft" | "borderTopRadius" | "borderRightRadius" | "borderBottomRadius" | "borderLeftRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderX" | "borderY" | "boxShadow" | "textShadow" | "bg" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "backgroundBlendMode" | "bgBlendMode" | "backgroundSize" | "backgroundPosition" | "bgImage" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "zIndex" | "inset" | "insetX" | "insetY" | "pos" | "position" | "outline" | "outlineOffset" | "outlineColor" | "animation" | "appearance" | "transformOrigin" | "userSelect" | "resize" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "objectFit" | "objectPosition" | "float" | "willChange" | "listStyleType" | "listStylePosition" | "listStyleImage" | "isTruncated" | "noOfLines" | "htmlWidth" | "htmlHeight" | "htmlSize" | "variant" | "colorScheme" | "apply" | "layerStyle" | "textStyle" | "icon" | "getInitials" | "showBorder"> & React.RefAttributes<any>>;
export {};
//# sourceMappingURL=Avatar.d.ts.map