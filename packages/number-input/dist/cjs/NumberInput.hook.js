"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNumberInput = void 0;
var tslib_1 = require("tslib");
var counter_1 = require("@chakra-ui/counter");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
var NumberInput_spinner_1 = require("./NumberInput.spinner");
var NumberInput_utils_1 = require("./NumberInput.utils");
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
function useNumberInput(props) {
    if (props === void 0) { props = {}; }
    var _a = props.focusInputOnChange, focusInputOnChange = _a === void 0 ? true : _a, _b = props.clampValueOnBlur, clampValueOnBlur = _b === void 0 ? true : _b, _c = props.keepWithinRange, keepWithinRange = _c === void 0 ? true : _c, _d = props.min, min = _d === void 0 ? utils_1.minSafeInteger : _d, _e = props.max, max = _e === void 0 ? utils_1.maxSafeInteger : _e, _f = props.step, stepProp = _f === void 0 ? 1 : _f, isReadOnly = props.isReadOnly, isDisabled = props.isDisabled, getAriaValueText = props.getAriaValueText, isInvalid = props.isInvalid, onChangeProp = props.onChange, id = props.id, htmlProps = tslib_1.__rest(props
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
    var counter = counter_1.useCounter(props);
    /**
     * Keep track of the focused state of the input,
     * so user can this to change the styles of the
     * `spinners`, maybe :)
     */
    var _g = hooks_1.useBoolean(), isFocused = _g[0], setFocused = _g[1];
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
    var spinner = NumberInput_spinner_1.useSpinner(increment, decrement);
    /**
     * The `onChange` handler filters out any character typed
     * that isn't floating point compatible.
     */
    var onChange = function (event) {
        var characters = event.target.value
            .split("")
            .filter(NumberInput_utils_1.isFloatingPointNumericCharacter)
            .join("");
        counter.update(characters);
    };
    var onKeyDown = function (event) {
        /**
         * only allow valid numeric keys
         */
        if (!NumberInput_utils_1.isValidNumericKeyboardEvent(event)) {
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
        var eventKey = utils_1.normalizeEventKey(event);
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
            utils_1.ensureFocus(inputRef.current);
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
            return (tslib_1.__assign(tslib_1.__assign({}, props), { role: "button", tabIndex: -1, onMouseDown: utils_1.callAllHandlers(props.onMouseDown, spinUp), onMouseUp: utils_1.callAllHandlers(props.onMouseUp, spinner.stop), onMouseLeave: utils_1.callAllHandlers(props.onMouseUp, spinner.stop), onTouchStart: utils_1.callAllHandlers(props.onTouchStart, spinUp), onTouchEnd: utils_1.callAllHandlers(props.onTouchEnd, spinner.stop), disabled: keepWithinRange && counter.isAtMax, "aria-disabled": utils_1.ariaAttr(keepWithinRange && counter.isAtMax) }));
        },
        getDecrementButtonProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { role: "button", tabIndex: -1, onMouseDown: utils_1.callAllHandlers(props.onMouseDown, spinDown), onMouseLeave: utils_1.callAllHandlers(props.onMouseUp, spinner.stop), onMouseUp: utils_1.callAllHandlers(props.onMouseUp, spinner.stop), onTouchStart: utils_1.callAllHandlers(props.onTouchStart, spinDown), onTouchEnd: utils_1.callAllHandlers(props.onTouchEnd, spinner.stop), disabled: keepWithinRange && counter.isAtMin, "aria-disabled": utils_1.ariaAttr(keepWithinRange && counter.isAtMin) }));
        },
        getInputProps: function (props) {
            if (props === void 0) { props = {}; }
            return (tslib_1.__assign(tslib_1.__assign({}, props), { id: id, ref: utils_1.mergeRefs(inputRef, props.ref), value: counter.value, role: "spinbutton", type: "text", inputMode: "numeric", pattern: "[0-9]*", "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": isDisabled, "aria-valuenow": isNaN(counter.valueAsNumber)
                    ? undefined
                    : counter.valueAsNumber, "aria-invalid": isInvalid || counter.isOutOfRange, "aria-valuetext": ariaValueText, readOnly: isReadOnly, disabled: isDisabled, autoComplete: "off", autoCorrect: "off", onChange: utils_1.callAllHandlers(props.onChange, onChange), onKeyDown: utils_1.callAllHandlers(props.onKeyDown, onKeyDown), onFocus: utils_1.callAllHandlers(props.onFocus, setFocused.on), onBlur: utils_1.callAllHandlers(props.onBlur, onBlur) }));
        },
        htmlProps: htmlProps,
    };
}
exports.useNumberInput = useNumberInput;
//# sourceMappingURL=NumberInput.hook.js.map