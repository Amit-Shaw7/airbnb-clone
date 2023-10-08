import { registerUserDetails } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import axios from "axios";
import toast from "react-hot-toast";
import { UseFormReset , FieldValues} from "react-hook-form";

export const registerUser = async (data: FieldValues, router: AppRouterInstance, reset: UseFormReset<FieldValues>) => {
    try {
        const response = await axios.post("/api/register", data);
        if (response?.status === 200) {
            router.push("/login");
        }
    } catch (error) {
        toast.error("Something went wrong.");
    } finally {
        reset();
    }
}