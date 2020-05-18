import { FunctionArguments } from "@chakra-ui/utils";
declare type AddEventListener = FunctionArguments<typeof document.addEventListener>;
/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 */
export declare function useEventListener(event: keyof WindowEventMap, handler: (event: any) => void, doc?: Document | null, options?: AddEventListener[2]): () => void;
export {};
//# sourceMappingURL=useEventListener.d.ts.map