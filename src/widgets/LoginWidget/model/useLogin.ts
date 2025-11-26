import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@entities/index";
import type { LoginFormValues } from "../config/loginForm.config";

export const useLogin = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const handleSubmit = async (values: LoginFormValues) => {
    await loginMutation.mutateAsync(values);
    navigate("/");
  };

  return {
    handleSubmit,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
