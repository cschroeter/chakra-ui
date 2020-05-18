export var matchWidth = {
    name: "matchWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: function (_a) {
        var state = _a.state;
        state.styles.popper.width = state.rects.reference.width + "px";
    },
    effect: function (_a) {
        var state = _a.state;
        var reference = state.elements.reference;
        state.elements.popper.style.width = reference.offsetWidth + "px";
        return function () { };
    },
};
//# sourceMappingURL=Popper.modifiers.js.map