import * as React from "react";
export declare type HideProps = ShowProps;
export declare const Hide: (props: HideProps) => JSX.Element;
export interface ShowProps {
    breakpoint?: string;
    below?: string;
    above?: string;
    children?: React.ReactNode;
}
export declare const Show: (props: ShowProps) => JSX.Element;
export declare const useQuery: (props: any) => any;
//# sourceMappingURL=media-query.d.ts.map