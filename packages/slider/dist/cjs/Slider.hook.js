"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlider = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
/**
 * Reack hook that implements an accessible range slider.
 *
 * It's an alternative to `<input type="range" />`, and returns
 * prop getters for the component parts
 *
 * @see Docs     https://chakra-ui.com/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
function useSlider(props) {
    var _a, _b;
    var _c = props.min, min = _c === void 0 ? 0 : _c, _d = props.max, max = _d === void 0 ? 100 : _d, onChange = props.onChange, valueProp = props.value, defaultValue = props.defaultValue, isReversed = props.isReversed, orientation = props.orientation, idProp = props.id, isDisabled = props.isDisabled, isReadOnly = props.isReadOnly, onChangeStart = props.onChangeStart, onChangeEnd = props.onChangeEnd, _e = props.step, step = _e === void 0 ? 1 : _e, getAriaValueText = props.getAriaValueText, ariaValueText = props["aria-valuetext"], ariaLabel = props["aria-label"], ariaLabelledBy = props["aria-labelledby"], name = props.name, htmlProps = tslib_1.__rest(props, ["min", "max", "onChange", "value", "defaultValue", "isReversed", "orientation", "id", "isDisabled", "isReadOnly", "onChangeStart", "onChangeEnd", "step", "getAriaValueText", "aria-valuetext", "aria-label", "aria-labelledby", "name"]);
    var _f = hooks_1.useBoolean(), isDragging = _f[0], setDragging = _f[1];
    var _g = hooks_1.useBoolean(), isFocused = _g[0], setFocused = _g[1];
    var _h = React.useState(), eventSource = _h[0], setEventSource = _h[1];
    var isInteractive = !(isDisabled || isReadOnly);
    /**
     * Enable the slider handle controlled and uncontrolled scenarios
     */
    var _j = hooks_1.useControllableState({
        value: valueProp,
        defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : getDefaultValue(min, max),
        onChange: onChange,
        shouldUpdate: function (prev, next) { return prev !== next; },
    }), computedValue = _j[0], setValue = _j[1];
    /**
     * Slider uses DOM APIs to add and remove event listeners.
     * Noticed some issues with React's synthetic events.
     *
     * We use `ref` to save the functions used to remove
     * the event listeners.
     *
     * Ideally, we'll love to use pointer-events API but it's
     * not fully supported in all browsers.
     */
    var cleanUpRef = React.useRef({});
    /**
     * Constrain the value because it can't be less than min
     * or greater than max
     */
    var value = utils_1.clampValue(computedValue, min, max);
    var prev = React.useRef();
    var reversedValue = max - value + min;
    var trackValue = isReversed ? reversedValue : value;
    var trackPercent = utils_1.valueToPercent(trackValue, min, max);
    var isVertical = orientation === "vertical";
    /**
     * Let's keep a reference to the slider track and thumb
     */
    var trackRef = React.useRef(null);
    var thumbRef = React.useRef(null);
    var rootRef = React.useRef(null);
    /**
     * Generate unique ids for component parts
     */
    var _k = hooks_1.useIds(idProp, "slider-thumb", "slider-track"), thumbId = _k[0], trackId = _k[1];
    /**
     * Get relative value of slider from the event by tracking
     * how far you clicked within the track to determine the value
     */
    var getValueFromPointer = React.useCallback(function (event) {
        var _a, _b;
        if (!trackRef.current)
            return;
        var trackRect = utils_1.getBox(trackRef.current).borderBox;
        var _c = (_b = (_a = event.touches) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : event, clientX = _c.clientX, clientY = _c.clientY;
        var diff = isVertical
            ? trackRect.bottom - clientY
            : clientX - trackRect.left;
        var length = isVertical ? trackRect.height : trackRect.width;
        var percent = diff / length;
        if (isReversed) {
            percent = 1 - percent;
        }
        var nextValue = utils_1.percentToValue(percent, min, max);
        if (step) {
            nextValue = parseFloat(utils_1.roundValueToStep(nextValue, step));
        }
        nextValue = utils_1.clampValue(nextValue, min, max);
        return nextValue;
    }, [isVertical, isReversed, max, min, step]);
    var tenSteps = (max - min) / 10;
    var oneStep = step || (max - min) / 100;
    var constrain = React.useCallback(function (value) {
        // bail out if slider isn't interactive
        if (!isInteractive)
            return;
        prev.current = value;
        value = parseFloat(utils_1.roundValueToStep(value, oneStep));
        value = utils_1.clampValue(value, min, max);
        setValue(value);
    }, [oneStep, max, min, setValue, isInteractive]);
    var actions = React.useMemo(function () { return ({
        stepUp: function (step) {
            if (step === void 0) { step = oneStep; }
            var next = isReversed ? value - step : value + step;
            constrain(next);
        },
        stepDown: function (step) {
            if (step === void 0) { step = oneStep; }
            var next = isReversed ? value + step : value - step;
            constrain(next);
        },
        reset: function () { return constrain(defaultValue || 0); },
        stepTo: function (value) { return constrain(value); },
    }); }, [constrain, isReversed, value, oneStep, defaultValue]);
    /**
     * Keyboard interaction to ensure users can operate
     * the slider using only their keyboard.
     *
     * @see https://www.w3.org/TR/wai-aria-practices-1.1/#slider_kbd_interaction
     */
    var onKeyDown = utils_1.createOnKeyDown({
        stopPropagation: true,
        onKey: function () { return setEventSource("keyboard"); },
        keyMap: {
            ArrowRight: function () { return actions.stepUp(); },
            ArrowUp: function () { return actions.stepUp(); },
            ArrowLeft: function () { return actions.stepDown(); },
            ArrowDown: function () { return actions.stepDown(); },
            PageUp: function () { return actions.stepUp(tenSteps); },
            PageDown: function () { return actions.stepDown(tenSteps); },
            Home: function () { return constrain(min); },
            End: function () { return constrain(max); },
        },
    });
    /**
     * ARIA (Optional): To define a human readable representation of the value,
     * we allow users pass aria-valuetext.
     */
    var valueText = (_a = getAriaValueText === null || getAriaValueText === void 0 ? void 0 : getAriaValueText(value)) !== null && _a !== void 0 ? _a : ariaValueText;
    /**
     * Measure the dimensions of the thumb so
     * we can center it within the track properly
     */
    var thumbBoxModel = hooks_1.useDimensions(thumbRef);
    var thumbRect = (_b = thumbBoxModel === null || thumbBoxModel === void 0 ? void 0 : thumbBoxModel.borderBox) !== null && _b !== void 0 ? _b : {
        width: 0,
        height: 0,
    };
    /**
     * Compute styles for all component parts.
     */
    var thumbStyle = tslib_1.__assign({ position: "absolute", userSelect: "none", touchAction: "none" }, getOrientationValue({
        orientation: orientation,
        vertical: {
            bottom: "calc(" + trackPercent + "% - " + thumbRect.height / 2 + "px)",
        },
        horizontal: {
            left: "calc(" + trackPercent + "% - " + thumbRect.width / 2 + "px)",
        },
    }));
    var rootStyle = tslib_1.__assign({ position: "relative", touchAction: "none", WebkitTapHighlightColor: "rgba(0,0,0,0)", userSelect: "none", outline: 0 }, getOrientationValue({
        orientation: orientation,
        vertical: {
            paddingLeft: thumbRect.width / 2,
            paddingRight: thumbRect.width / 2,
        },
        horizontal: {
            paddingTop: thumbRect.height / 2,
            paddingBottom: thumbRect.height / 2,
        },
    }));
    var trackStyle = tslib_1.__assign({ position: "absolute" }, getOrientationValue({
        orientation: orientation,
        vertical: {
            left: "50%",
            transform: "translateX(-50%)",
            height: "100%",
        },
        horizontal: {
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
        },
    }));
    var innerTrackStyle = tslib_1.__assign(tslib_1.__assign({}, trackStyle), getOrientationValue({
        orientation: orientation,
        vertical: isReversed
            ? { height: 100 - trackPercent + "%", top: 0 }
            : { height: trackPercent + "%", bottom: 0 },
        horizontal: isReversed
            ? { width: 100 - trackPercent + "%", right: 0 }
            : { width: trackPercent + "%", left: 0 },
    }));
    hooks_1.useUpdateEffect(function () {
        if (thumbRef.current) {
            utils_1.ensureFocus(thumbRef.current);
        }
    }, [value]);
    hooks_1.useUpdateEffect(function () {
        var shouldUpdate = !isDragging && eventSource !== "keyboard" && prev.current !== value;
        if (shouldUpdate) {
            onChangeEnd === null || onChangeEnd === void 0 ? void 0 : onChangeEnd(value);
        }
        if (eventSource === "keyboard") {
            onChangeEnd === null || onChangeEnd === void 0 ? void 0 : onChangeEnd(value);
        }
    }, [isDragging, onChangeEnd, value, eventSource]);
    var onMouseDown = hooks_1.useEventCallback(function (event) {
        /**
         * Prevent update if it's right-click
         */
        if (event.button != 0)
            return;
        if (!isInteractive || !rootRef.current)
            return;
        setDragging.on();
        prev.current = value;
        onChangeStart === null || onChangeStart === void 0 ? void 0 : onChangeStart(value);
        var doc = utils_1.getOwnerDocument(rootRef.current);
        var run = function (event) {
            var nextValue = getValueFromPointer(event);
            if (nextValue && nextValue !== value) {
                setEventSource("mouse");
                setValue(nextValue);
            }
        };
        run(event);
        doc.addEventListener("mousemove", run);
        var clean = function () {
            doc.removeEventListener("mousemove", run);
            setDragging.off();
        };
        doc.addEventListener("mouseup", clean);
        cleanUpRef.current.mouseup = function () {
            doc.removeEventListener("mouseup", clean);
        };
    });
    var onTouchStart = hooks_1.useEventCallback(function (event) {
        if (!isInteractive || !rootRef.current)
            return;
        // Prevent scrolling for touch events
        event.preventDefault();
        setDragging.on();
        prev.current = value;
        onChangeStart === null || onChangeStart === void 0 ? void 0 : onChangeStart(value);
        var doc = utils_1.getOwnerDocument(rootRef.current);
        var run = function (event) {
            var nextValue = getValueFromPointer(event);
            if (nextValue && nextValue !== value) {
                setEventSource("touch");
                setValue(nextValue);
            }
        };
        run(event);
        doc.addEventListener("touchmove", run);
        var clean = function () {
            doc.removeEventListener("touchmove", run);
            setDragging.off();
        };
        doc.addEventListener("touchend", clean);
        doc.addEventListener("touchcancel", clean);
        cleanUpRef.current.touchend = function () {
            doc.removeEventListener("touchend", clean);
        };
        cleanUpRef.current.touchcancel = function () {
            doc.removeEventListener("touchcancel", clean);
        };
    });
    /**
     * Remove all event handlers
     */
    var detach = function () {
        Object.values(cleanUpRef.current).forEach(function (cleanup) {
            cleanup === null || cleanup === void 0 ? void 0 : cleanup();
        });
        cleanUpRef.current = {};
    };
    /**
     * Ensure we clean up listeners when slider unmounts
     */
    React.useEffect(function () {
        return function () { return detach(); };
    }, []);
    hooks_1.useUpdateEffect(function () {
        if (!isDragging) {
            detach();
        }
    }, [isDragging]);
    cleanUpRef.current.mousedown = hooks_1.useEventListener("mousedown", onMouseDown, rootRef.current);
    cleanUpRef.current.touchstart = hooks_1.useEventListener("touchstart", onTouchStart, rootRef.current);
    return {
        state: {
            value: value,
            isFocused: isFocused,
            isDragging: isDragging,
        },
        actions: actions,
        getRootProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props), htmlProps), { ref: utils_1.mergeRefs(props.ref, rootRef), tabIndex: -1, "aria-disabled": utils_1.ariaAttr(isDisabled), "data-focused": utils_1.dataAttr(isFocused), style: utils_1.merge(props.style, rootStyle) }));
        },
        getTrackProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: utils_1.mergeRefs(props.ref, trackRef), id: trackId, "data-disabled": utils_1.dataAttr(isDisabled), style: utils_1.merge(props.style, trackStyle) }));
        },
        getInnerTrackProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { style: utils_1.merge(props.style, innerTrackStyle) }));
        },
        getThumbProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { ref: thumbRef, role: "slider", tabIndex: 0, id: thumbId, "data-active": utils_1.dataAttr(isDragging), "aria-valuetext": valueText, "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, "aria-orientation": orientation, "aria-disabled": utils_1.ariaAttr(isDisabled), "aria-readonly": utils_1.ariaAttr(isReadOnly), "aria-label": ariaLabel, "aria-labelledby": ariaLabel ? undefined : ariaLabelledBy, style: utils_1.merge(props.style, thumbStyle), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown), onFocus: utils_1.callAllHandlers(props.onFocus, setFocused.on), onBlur: utils_1.callAllHandlers(props.onBlur, setFocused.off) }));
        },
        getMarkerProps: function (props) {
            var isInRange = !(props.value < min || props.value > max);
            var isHighlighted = value >= props.value;
            var markerPercent = utils_1.valueToPercent(props.value, min, max);
            var markerStyle = tslib_1.__assign({ position: "absolute", pointerEvents: "none" }, getOrientationValue({
                orientation: orientation,
                vertical: {
                    bottom: isReversed
                        ? 100 - markerPercent + "%"
                        : markerPercent + "%",
                },
                horizontal: {
                    left: isReversed ? 100 - markerPercent + "%" : markerPercent + "%",
                },
            }));
            return tslib_1.__assign(tslib_1.__assign({}, props), { role: "presentation", "aria-hidden": true, "data-disabled": utils_1.dataAttr(isDisabled), "data-invalid": utils_1.dataAttr(!isInRange), "data-highlighted": utils_1.dataAttr(isHighlighted), style: utils_1.merge(props.style, markerStyle) });
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { type: "hidden", value: value,
                name: name }));
        },
    };
}
exports.useSlider = useSlider;
/**
 * Get the value based on orientation
 * @param options
 */
function getOrientationValue(options) {
    var orientation = options.orientation, vertical = options.vertical, horizontal = options.horizontal;
    return orientation === "vertical" ? vertical : horizontal;
}
/**
 * The browser <input type="range" /> calculates
 * the default value of a slider by using mid-point
 * between the min and the max.
 *
 * @param min the minimum value
 * @param max the maximum value
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 */
function getDefaultValue(min, max) {
    return max < min ? min : min + (max - min) / 2;
}
//# sourceMappingURL=Slider.hook.js.map