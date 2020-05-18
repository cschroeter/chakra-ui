export interface UseDisclosureProps {
    isOpen?: boolean;
    defaultIsOpen?: boolean;
    onClose?(): void;
    onOpen?(): void;
}
export declare function useDisclosure(props?: UseDisclosureProps): {
    isOpen: boolean;
    prevIsOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
};
export declare type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
//# sourceMappingURL=useDisclosure.d.ts.map