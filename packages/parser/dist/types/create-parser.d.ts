import { Dict } from "@chakra-ui/utils";
import { SystemProps } from "./parser.types";
import { Config } from "./utils";
declare type ParserProps<P> = SystemProps & {
    theme: Dict;
} & P;
export declare function createParser(styleConfig: Config): {
    <P = {}>(props: ParserProps<P>): Record<string, any>;
    config: Config;
    propNames: string[];
};
export declare type Parser = ReturnType<typeof createParser>;
export {};
//# sourceMappingURL=create-parser.d.ts.map