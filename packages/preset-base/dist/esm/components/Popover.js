import { mode } from "./utils";
var Popover = {
    baseStyle: function (props) { return ({
        Content: {
            bg: mode("white", "gray.700")(props),
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: "md",
            boxShadow: "sm",
            maxWidth: "xs",
            _focus: {
                outline: 0,
                boxShadow: "outline",
            },
        },
        Header: {
            paddingX: 3,
            paddingY: 2,
            borderBottomWidth: "1px",
        },
        Body: {
            paddingX: 3,
            paddingY: 2,
        },
        Footer: {
            paddingX: 3,
            paddingY: 2,
            borderTopWidth: "1px",
        },
    }); },
};
export default Popover;
//# sourceMappingURL=Popover.js.map