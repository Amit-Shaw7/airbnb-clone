"use client";
import { useState } from "react";
import React from "react";
import { useModalAction } from "@/store/ModalContext";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { registerUser } from "@/store/actions/AuthActions";
import { useRouter } from "next/navigation";
import Modal from "@/components/modals/Modal";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";


const RegisterModal = () => {
    const modalActions = useModalAction();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        await registerUser(data, router, reset);
        modalActions.onCloseRegisterModal();
        setIsLoading(false);
    }

    const bodyContent = (
        <div
            className="flex flex-col gap-4"
        >
            <Heading
                title="Welcome to Airbnb"
                subTitle="Create an account"
            />

            <Input
                id="email"
                type="text"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                type="text"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div
            className="flex flex-col gap-4 mt-3"
        >
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => { }}
            />

            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => { }}
            />

            <div
                className="text-neutral-500 text-center mt-4 font-light"
            >
                <div
                    className="justify-center flex flex-row gap-2 items-center"
                >
                    <p>
                        Already have an account?
                    </p>
                    <span 
                        className="text-neutral-800 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={modalActions.isOpenRegisterModal}
            title="Resgister"
            actionLabel="Continue"
            onClose={modalActions.onCloseRegisterModal}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;