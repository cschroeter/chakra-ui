var LiveRegion = /** @class */ (function () {
    function LiveRegion(options) {
        this.options = getOptions(options);
        this.region = getRegion(this.options);
        this.parentNode = this.options.parentNode;
        this.parentNode.appendChild(this.region);
    }
    LiveRegion.prototype.speak = function (message) {
        this.clear();
        this.region.innerText = message;
    };
    LiveRegion.prototype.destroy = function () {
        if (this.region.parentNode) {
            this.region.parentNode.removeChild(this.region);
        }
    };
    LiveRegion.prototype.clear = function () {
        this.region.innerText = "";
    };
    return LiveRegion;
}());
export { LiveRegion };
function getOptions(options) {
    var defaultOptions = {
        "aria-live": "polite",
        "aria-atomic": "true",
        "aria-relevant": "all",
        role: "status",
        id: "chakra-a11y-live-region",
        parentNode: document.body,
    };
    if (options) {
        return Object.assign(defaultOptions, options);
    }
    return defaultOptions;
}
function getRegion(options) {
    var region = document.getElementById(options.id);
    if (region) {
        return region;
    }
    else {
        region = document.createElement("div");
        setup(region, options);
        return region;
    }
}
function setup(region, options) {
    region.id = options.id || "chakra-live-region";
    region.className = "__chakra-live-region";
    region.setAttribute("aria-live", options["aria-live"]);
    region.setAttribute("role", options.role);
    region.setAttribute("aria-relevant", options["aria-relevant"]);
    region.setAttribute("aria-atomic", String(options["aria-atomic"]));
    Object.assign(region.style, {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
    });
}
export default LiveRegion;
//# sourceMappingURL=live-region.js.map