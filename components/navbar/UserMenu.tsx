import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/Avatar";

const UserMenu = () => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full bg-neutral-100 transition cursor-pointer">
                    Your clone
                </div>

                <div className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                </div>

                <div className="hidden md:block">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default UserMenu;