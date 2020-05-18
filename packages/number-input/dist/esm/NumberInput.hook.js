import { __assign, __rest } from "tslib";
import { useCounter } from "@chakra-ui/counter";
import { useBoolean } from "@chakra-ui/hooks";
import { callAllHandlers, ensureFocus, mergeRefs, normalizeEventKey, ariaAttr, minSafeInteger, maxSafeInteger, } from "@chakra-ui/utils";
import * as React from "react";
import { useSpinner } from "./NumberInput.spinner";
import { isFloatingPointNumericCharacter, isValidNumericKeyboardEvent, } from "./NumberInput.utils";
/**
 * React hook that implements the WAI-ARIA Spin Button widget
 * and used to create numeric input fields.
 *
 * It returns prop getters you can use to build your own
 * custom number inputs.
 *
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
 * @see Docs     https://www.chakra-ui.com/useNumberInput
 * @see WHATWG   https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number)
 */
export function useNumberInput(props) {
    if (props === void 0) { props = {}; }
    var _a = props.focusInputOnChange, focusInputOnChange = _a === void 0 ? true : _a, _b = props.clampValueOnBlur, clampValueOnBlur = _b === void 0 ? true : _b, _c = props.keepWithinRange, keepWithinRange = _c === void 0 ? true : _c, _d = props.min, min = _d === void 0 ? minSafeInteger : _d, _e = props.max, max = _e === void 0 ? maxSafeInteger : _e, _f = props.step, stepProp = _f === void 0 ? 1 : _f, isReadOnly = props.isReadOnly, isDisabled = props.isDisabled, getAriaValueText = props.getAriaValueText, isInvalid = props.isInvalid, onChangeProp = props.onChange, id = props.id, htmlProps = __rest(props
    /**
     * Leverage the `useCounter` hook since it provides
     * the functionality to `increment`, `decrement` and `update`
     * counter values
     */
    , ["focusInputOnChange", "clampValueOnBlur", "keepWithinRange", "min", "max", "step", "isReadOnly", "isDisabled", "getAriaValueText", "isInvalid", "onChange", "id"]);
    /**
     * Leverage the `useCounter` hook since it provides
     * the functionality to `increment`, `decrement` and `update`
     * counter values
     */
    var counter = useCounter(props);
    /**
     * Keep track of the focused state of the input,
     * so user can this to change the styles of the
     * `spinners`, maybe :)
     */
    var _g = useBoolean(), isFocused = _g[0], setFocused = _g[1];
    var inputRef = React.useRef(null);
    var isInteractive = !(isReadOnly || isDisabled);
    var increment = function (step) {
        if (step === void 0) { step = stepProp; }
        if (isInteractive) {
            counter.increment(step);
        }
    };
    var decrement = function (step) {
        if (step === void 0) { step = stepProp; }
        if (isInteractive) {
            counter.decrement(step);
        }
    };
    /**
     * Leverage the `useSpinner` hook to spin the input's value
     * when long press on the up and down buttons.
     *
     * This leverages `setInterval` internally
     */
    var spinner = useSpinner(increment, decrement);
    /**
     * The `onChange` handler filters out any character typed
     * that isn't floating point compatible.
     */
    var onChange = function (event) {
        var characters = event.target.value
            .split("")
            .filter(isFloatingPointNumericCharacter)
            .join("");
        counter.update(characters);
    };
    var onKeyDown = function (event) {
        /**
         * only allow valid numeric keys
         */
        if (!isValidNumericKeyboardEvent(event)) {
            event.preventDefault();
        }
        /**
         * Keyboard Accessibility
         *
         * We want to increase or decrease the input's value
         * based on if the user the arrow keys.
         *
         * @see https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-17
         */
        var stepFactor = getStepFactor(event) * stepProp;
        var eventKey = normalizeEventKey(event);
        switch (eventKey) {
            case "ArrowUp":
                event.preventDefault();
                increment(stepFactor);
                break;
            case "ArrowDown":
                event.preventDefault();
                decrement(stepFactor);
                break;
            case "Home":
                event.preventDefault();
                counter.update(min);
                break;
            case "End":
                event.preventDefault();
                counter.update(max);
                break;
            default:
                break;
        }
    };
    var getStepFactor = function (event) {
        var ratio = 1;
        if (event.metaKey || event.ctrlKey) {
            ratio = 0.1;
        }
        if (event.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * If user would like to use a human-readable representation
     * of the value, rather than the value itself they can pass `getAriaValueText`
     *
     * @see https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties-18
     * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext
     */
    var ariaValueText = getAriaValueText === null || getAriaValueText === void 0 ? void 0 : getAriaValueText(counter.value);
    /**
     * Function that clamps the input's value on blur
     */
    var validateAndClamp = function () {
        var next = counter.value;
        if (next === "")
            return;
        if (counter.valueAsNumber < min) {
            next = min;
        }
        if (counter.valueAsNumber > max) {
            next = max;
        }
        /**
         * `counter.cast` does 2 things:
         *
         * - sanitize the value by using parseFloat and some Regex
         * - used to round value to computed precision or decimal points
         */
        counter.cast(next);
    };
    var onBlur = function () {
        setFocused.off();
        if (clampValueOnBlur) {
            validateAndClamp();
        }
    };
    var focusInput = function () {
        if (focusInputOnChange && inputRef.current) {
            ensureFocus(inputRef.current);
        }
    };
    var spinUp = function (event) {
        event.preventDefault();
        spinner.up();
        focusInput();
    };
    var spinDown = function (event) {
        event.preventDefault();
        spinner.down();
        focusInput();
    };
    return {
        value: counter.value,
        valueAsNumber: counter.valueAsNumber,
        isFocused: isFocused,
        isDisabled: isDisabled,
        isReadOnly: isReadOnly,
        getIncrementButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { role: "button", tabIndex: -1, onMouseDown: callAllHandlers(props.onMouseDown, spinUp), onMouseUp: callAllHandlers(props.onMouseUp, spinner.stop), onMouseLeave: callAllHandlers(props.onMouseUp, spinner.stop), onTouchStart: callAllHandlers(props.onTouchStart, spinUp), onTouchEnd: callAllHandlers(props.onTouchEnd, spinner.stop), disabled: keepWithinRange && counter.isAtMax, "aria-disabled": ariaAttr(keepWithinRange && counter.isAtMax) }));
        },
        getDecrementButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { role: "button", tabIndex: -1, onMouseDown: callAllHandlers(props.onMouseDown, spinDown), onMouseLeave: callAllHandlers(props.onMouseUp, spinner.stop), onMouseUp: callAllHandlers(props.onMouseUp, spinner.stop), onTouchStart: callAllHandlers(props.onTouchStart, spinDown), onTouchEnd: callAllHandlers(props.onTouchEnd, spinner.stop), disabled: keepWithinRange && counter.isAtMin, "aria-disabled": ariaAttr(keepWithinRange && counter.isAtMin) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (__assign(__assign({}, props), { id: id, ref: mergeRefs(inputRef, props.ref), value: counter.value, role: "spinbutton", type: "text", inputMode: "numeric", pattern: "[0-9]*", "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": isDisabled, "aria-valuenow": isNaN(counter.valueAsNumber)
                    ? undefined
                    : counter.valueAsNumber, "aria-invalid": isInvalid || counter.isOutOfRange, "aria-valuetext": ariaValueText, readOnly: isReadOnly, disabled: isDisabled, autoComplete: "off", autoCorrect: "off", onChange: callAllHandlers(props.onChange, onChange), onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown), onFocus: callAllHandlers(props.onFocus, setFocused.on), onBlur: callAllHandlers(props.onBlur, onBlur) }));
        },
        htmlProps: htmlProps,
    };
}
//# sourceMappingURL=NumberInput.hook.js.map