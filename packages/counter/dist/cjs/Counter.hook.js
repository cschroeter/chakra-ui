"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounter = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var utils_1 = require("@chakra-ui/utils");
var React = tslib_1.__importStar(require("react"));
function useCounter(props) {
    if (props === void 0) { props = {}; }
    var onChange = props.onChange, precisionProp = props.precision, defaultValue = props.defaultValue, valueProp = props.value, _a = props.step, stepProp = _a === void 0 ? 1 : _a, _b = props.min, min = _b === void 0 ? utils_1.minSafeInteger : _b, _c = props.max, max = _c === void 0 ? utils_1.maxSafeInteger : _c, _d = props.keepWithinRange, keepWithinRange = _d === void 0 ? true : _d;
    var _e = React.useState(function () {
        if (defaultValue == null)
            return "";
        return cast(defaultValue, stepProp, precisionProp);
    }), valueState = _e[0], setValue = _e[1];
    /**
     * Because the component that consumes this hook can be controlled or uncontrolled
     * we'll keep track of that
     */
    var _f = hooks_1.useControllableProp(valueProp, valueState), isControlled = _f[0], value = _f[1];
    var decimalPlaces = getDecimalPlaces(parse(value), stepProp);
    var precision = precisionProp !== null && precisionProp !== void 0 ? precisionProp : decimalPlaces;
    var update = React.useCallback(function (next) {
        if (!isControlled) {
            setValue(next.toString());
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(next.toString(), parse(next));
    }, [onChange, isControlled]);
    // Function to clamp the value and round it to the precision
    var clamp = React.useCallback(function (value) {
        var nextValue = value;
        if (keepWithinRange) {
            nextValue = utils_1.clampValue(nextValue, min, max);
        }
        return utils_1.toPrecision(nextValue, precision);
    }, [precision, keepWithinRange, max, min]);
    var increment = React.useCallback(function (step) {
        var _a, _b;
        if (step === void 0) { step = stepProp; }
        var next;
        /**
         * Let's follow the native browser behavior for
         * scenarios where the input starts empty ("")
         */
        if (value === "") {
            /**
             * If `min` is set, native input, starts at the `min`.
             * Else, it starts at `step`
             */
            next = (_b = (_a = props.min) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : parse("0") + step;
        }
        else {
            next = parse(value) + step;
        }
        next = clamp(next);
        update(next);
    }, [clamp, stepProp, update, value, props.min]);
    var decrement = React.useCallback(function (step) {
        var _a, _b;
        if (step === void 0) { step = stepProp; }
        var next;
        // Same thing here. We'll follow native implementation
        if (value === "") {
            next = (_b = (_a = props.min) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : parse("0") - step;
        }
        else {
            next = parse(value) - step;
        }
        next = clamp(next);
        update(next);
    }, [clamp, stepProp, update, value, props.min]);
    var reset = React.useCallback(function () {
        var next;
        if (defaultValue == null) {
            next = "";
        }
        else {
            next = cast(defaultValue, stepProp, precisionProp);
        }
        update(next);
    }, [defaultValue, precisionProp, stepProp, update]);
    var castValue = React.useCallback(function (value) {
        update(cast(value, stepProp, precision));
    }, [precision, stepProp, update]);
    var valueAsNumber = parse(value);
    /**
     * Common range checks
     */
    var isOutOfRange = valueAsNumber > max || valueAsNumber < min;
    var isAtMax = valueAsNumber == max;
    var isAtMin = valueAsNumber == min;
    return {
        isOutOfRange: isOutOfRange,
        isAtMax: isAtMax,
        isAtMin: isAtMin,
        precision: precision,
        value: value,
        valueAsNumber: valueAsNumber,
        update: update,
        reset: reset,
        increment: increment,
        decrement: decrement,
        clamp: clamp,
        cast: castValue,
    };
}
exports.useCounter = useCounter;
function parse(value) {
    return parseFloat(value.toString().replace(/[^\w\.-]+/g, ""));
}
function getDecimalPlaces(value, step) {
    return Math.max(utils_1.countDecimalPlaces(step), utils_1.countDecimalPlaces(value));
}
function cast(value, step, precision) {
    var decimalPlaces = getDecimalPlaces(parse(value), step);
    return utils_1.toPrecision(parse(value), precision !== null && precision !== void 0 ? precision : decimalPlaces);
}
//# sourceMappingURL=Counter.hook.js.map