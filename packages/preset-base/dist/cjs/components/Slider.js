"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderTokens = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var Slider = {
    defaultProps: {
        size: "md",
    },
    sizes: {
        lg: function (props) { return ({
            Thumb: { width: "16px", height: "16px" },
            Track: utils_1.getOrientationStyle({
                orientation: props.orientation,
                horizontal: { height: "4px" },
                vertical: { width: "4px" },
            }),
        }); },
        md: function (props) { return ({
            Thumb: { width: "14px", height: "14px" },
            Track: utils_1.getOrientationStyle({
                orientation: props.orientation,
                horizontal: { height: "4px" },
                vertical: { width: "4px" },
            }),
        }); },
        sm: function (props) { return ({
            Thumb: { width: "10px", height: "10px" },
            Track: utils_1.getOrientationStyle({
                orientation: props.orientation,
                horizontal: { height: "2px" },
                vertical: { width: "2px" },
            }),
        }); },
    },
    baseStyle: function (props) { return ({
        Root: tslib_1.__assign({ _disabled: {
                opacity: 0.6,
                cursor: "default",
                pointerEvents: "none",
            } }, utils_1.getOrientationStyle({
            orientation: props.orientation,
            vertical: { height: "100%" },
            horizontal: { width: "100%" },
        })),
        Track: {
            borderRadius: "sm",
            bg: utils_1.mode("gray.200", "whiteAlpha.200")(props),
            _disabled: {
                bg: utils_1.mode("gray.300", "whiteAlpha.300")(props),
            },
        },
        Thumb: tslib_1.__assign({ zIndex: 1, borderRadius: "full", bg: "white", boxShadow: "sm", border: "1px solid", borderColor: "transparent", transition: "transform 0.2s", _focus: {
                boxShadow: "outline",
            }, _disabled: {
                bg: "gray.300",
            } }, utils_1.getOrientationStyle({
            orientation: props.orientation,
            vertical: {
                left: "50%",
                transform: "translateX(-50%)",
                _active: {
                    transform: "translateX(-50%) scale(1.15)",
                },
            },
            horizontal: {
                top: "50%",
                transform: "translateY(-50%)",
                _active: {
                    transform: "translateY(-50%) scale(1.15)",
                },
            },
        })),
        FilledTrack: {
            bg: utils_1.mode(props.colorScheme + ".500", props.colorScheme + ".200")(props),
        },
    }); },
};
exports.SliderTokens = {
    sizes: {
        lg: "lg",
        sm: "sm",
        md: "md",
    },
};
exports.default = Slider;
//# sourceMappingURL=Slider.js.map