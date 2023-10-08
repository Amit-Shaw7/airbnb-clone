"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/Avatar";
import MenuItem from "@/components/navbar/MenuItem";
import { useModalAction } from "@/store/ModalContext";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalActions = useModalAction();

    const toggleOpen = () => {
        setIsOpen((value) => !value);
    }
    
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => { }}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full bg-neutral-100 transition cursor-pointer"
                >
                    Airbnb you home
                </div>

                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                </div>

                <div

                    className="hidden md:block"
                >
                    <Avatar />
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={() => {}} label="Login" />
                            <MenuItem onClick={modalActions.onOpenRegisterModal} label="Signup" />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;