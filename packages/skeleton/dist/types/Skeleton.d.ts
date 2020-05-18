/// <reference types="react" />
import { PropsOf } from "@chakra-ui/system";
export interface SkeletonOptions {
    /**
     * The color at the animation start
     */
    startColor?: string;
    /**
     * The color at the animation end
     */
    endColor?: string;
    /**
     * If `true`, it'll render it's children with a nice fade transition
     */
    hasLoaded?: boolean;
    /**
     * The animation speed in seconds
     * @default
     * 0.8
     */
    speed?: number;
    /**
     * The fadeIn duration in seconds
     *
     * @default
     * 0.4
     */
    fadeDuration?: number;
}
declare const StyledSkeleton: import("@chakra-ui/system/dist/types").ChakraComponent<"div", SkeletonOptions>;
export declare type ISkeleton = SkeletonOptions;
export declare type SkeletonProps = PropsOf<typeof StyledSkeleton>;
export declare const Skeleton: {
    (props: SkeletonProps): JSX.Element;
    displayName: string;
};
export declare type SkeletonTextProps = SkeletonProps & {
    noOfLines?: number;
    spacing?: SkeletonProps["margin"];
    skeletonHeight?: SkeletonProps["height"];
    startColor?: SkeletonProps["startColor"];
    endColor?: SkeletonProps["endColor"];
};
export declare function SkeletonText(props: SkeletonTextProps): JSX.Element;
export declare const SkeletonCircle: ({ size, ...rest }: SkeletonProps) => JSX.Element;
export {};
//# sourceMappingURL=Skeleton.d.ts.map