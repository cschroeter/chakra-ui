export declare type UseImageProps = {
    /**
     * The image `src` attribute
     */
    src?: string;
    /**
     * The image `srcset` attribute
     */
    srcSet?: string;
    /**
     * The image `sizes` attribute
     */
    sizes?: string;
    /**
     * A callback for when the image `src` has been loaded
     */
    onLoad?(event: Event): void;
    /**
     * A callback for when there was an error loading the image `src`
     */
    onError?(error: string | Event): void;
    /**
     * If `true`, opt out of the `fallbackSrc` logic and use as `img`
     */
    ignoreFallback?: boolean;
};
declare type Status = "loading" | "failed" | "pending" | "loaded";
/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it's still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
export declare function useImage(props: UseImageProps): Status;
export declare type UseImageReturn = ReturnType<typeof useImage>;
export {};
//# sourceMappingURL=Image.hook.d.ts.map