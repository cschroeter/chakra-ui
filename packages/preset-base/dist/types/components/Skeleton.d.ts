import { ComponentTheme, Props } from "./utils";
export interface SkeletonProps {
    startColor?: string;
    endColor?: string;
    speed?: number;
    duration?: number;
}
export declare const frame: (start: string, end: string) => import("@emotion/serialize").Keyframes;
declare type CustomProps = Props & SkeletonProps;
export declare function getBaseStyle(props: CustomProps): {
    borderColor: any;
    background: any;
    animation: string;
};
declare const Skeleton: ComponentTheme<SkeletonProps>;
export default Skeleton;
//# sourceMappingURL=Skeleton.d.ts.map