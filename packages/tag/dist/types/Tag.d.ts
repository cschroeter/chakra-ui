/// <reference types="react" />
import { chakra, PropsOf } from "@chakra-ui/system";
import { IconProps } from "@chakra-ui/icon";
export declare type TagProps = PropsOf<typeof Tag>;
/**
 * The tag component is used to label or categorize UI elements.
 *
 * To style the tag globally, change the styles in `theme.components.Tag`
 *
 * @see Docs https://chakra-ui/tag
 */
export declare const Tag: import("@chakra-ui/system/dist/types").ChakraComponent<"span", {}>;
export declare type TagLabelProps = PropsOf<typeof TagLabel>;
export declare const TagLabel: import("@chakra-ui/system/dist/types").ChakraComponent<"span", {}>;
export declare const TagLeftIcon: {
    (props: IconProps): JSX.Element;
    displayName: string;
};
export declare const TagRightIcon: {
    (props: IconProps): JSX.Element;
    displayName: string;
};
export declare type TagCloseButtonProps = Omit<PropsOf<typeof chakra.button>, "disabled"> & {
    isDisabled?: boolean;
};
/**
 * TagCloseButton
 *
 * The tag close button. This is used to close "remove" the tag
 *
 * @see Docs https://chakra-ui/tag
 */
export declare const TagCloseButton: {
    (props: TagCloseButtonProps): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Tag.d.ts.map