"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpinner = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("@chakra-ui/hooks");
var React = tslib_1.__importStar(require("react"));
/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var CONTINUOUS_CHANGE_INTERVAL = 50;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var CONTINUOUS_CHANGE_DELAY = 300;
/**
 * React hook used in the number input to spin it's
 * value on long press of the spin buttons
 *
 * @param increment the function to increment
 * @param decrement the function to decrement
 */
function useSpinner(increment, decrement) {
    /**
     * To keep incrementing/decrementing on press, we call that `spinning`
     */
    var _a = React.useState(false), isSpinning = _a[0], setIsSpinning = _a[1];
    // This state keeps track of the action ("increment" or "decrement")
    var _b = React.useState(null), action = _b[0], setAction = _b[1];
    // To increment the value the first time you mousedown, we call that `runOnce`
    var _c = React.useState(true), runOnce = _c[0], setRunOnce = _c[1];
    // Store the timeout instance id in a ref, so we can clear the timeout later
    var timeoutRef = React.useRef(null);
    // Clears the timeout from memory
    var removeTimeout = function () { return clearTimeout(timeoutRef.current); };
    /**
     * useInterval hook provides a performant way to
     * update the state value at specific interval
     */
    hooks_1.useInterval(function () {
        if (action === "increment") {
            increment();
        }
        if (action === "decrement") {
            decrement();
        }
    }, isSpinning ? CONTINUOUS_CHANGE_INTERVAL : null);
    // Function to activate the spinning and increment the value
    var up = React.useCallback(function () {
        // increment the first fime
        if (runOnce) {
            increment();
        }
        // after a delay, keep incrementing at interval ("spinning up")
        timeoutRef.current = setTimeout(function () {
            setRunOnce(false);
            setIsSpinning(true);
            setAction("increment");
        }, CONTINUOUS_CHANGE_DELAY);
    }, [increment, runOnce]);
    // Function to activate the spinning and increment the value
    var down = React.useCallback(function () {
        // decrement the first fime
        if (runOnce) {
            decrement();
        }
        // after a delay, keep decrementing at interval ("spinning down")
        timeoutRef.current = setTimeout(function () {
            setRunOnce(false);
            setIsSpinning(true);
            setAction("decrement");
        }, CONTINUOUS_CHANGE_DELAY);
    }, [decrement, runOnce]);
    // Function to stop spinng (useful for mouseup, keyup handlers)
    var stop = React.useCallback(function () {
        setRunOnce(true);
        setIsSpinning(false);
        removeTimeout();
    }, []);
    /**
     * If the component unmounts while spinning,
     * let's clear the timeout as well
     */
    React.useEffect(function () {
        return function () {
            removeTimeout();
        };
    }, []);
    return { up: up, down: down, stop: stop };
}
exports.useSpinner = useSpinner;
//# sourceMappingURL=NumberInput.spinner.js.map