"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type modalContextType = {
    isOpenRegisterModal: boolean;
    onOpenRegisterModal: () => void;
    onCloseRegisterModal: () => void;
};

const modalContextDefaultValues: modalContextType = {
    isOpenRegisterModal: true,
    onOpenRegisterModal: () => {},
    onCloseRegisterModal: () => {},
};

const ModalContext = createContext<modalContextType>(modalContextDefaultValues);

export function useModalAction() {
    return useContext(ModalContext);
}

type Props = {
    children: ReactNode;
};

export function ModalProvider({ children }: Props) {
    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState<boolean>(false);
    const onOpenRegisterModal = () => {
        setIsOpenRegisterModal(true);
    };
    const onCloseRegisterModal = () => {
        setIsOpenRegisterModal(false);
    };

    const value = {
        isOpenRegisterModal,
        onOpenRegisterModal,
        onCloseRegisterModal
    }

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
        </>
    );
}