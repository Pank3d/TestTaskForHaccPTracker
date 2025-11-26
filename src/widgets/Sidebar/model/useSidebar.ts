import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { cookieService } from "@shared/lib";
import {
  useCurrentUser,
  useEnterprises,
  useSetEnterpriseMutation,
} from "@entities/index";

export const useSidebar = () => {
  const queryClient = useQueryClient();
  const { data: user } = useCurrentUser();
  const { data: enterprises } = useEnterprises();
  const setEnterpriseMutation = useSetEnterpriseMutation();
  const navigate = useNavigate()

  const [selectedEnterpriseId, setSelectedEnterpriseId] = useState<number | "">(
    ""
  );

  useEffect(() => {
    if (enterprises && enterprises.length > 0) {
      const activeEnterprise = enterprises.find(
        (enterprise) => enterprise.current_staffer?.is_user === true
      );
      if (activeEnterprise) {
        setSelectedEnterpriseId(activeEnterprise.id);
      }
    }
  }, [enterprises]);

  const handleEnterpriseChange = async (value: number) => {
    setSelectedEnterpriseId(value);
    await setEnterpriseMutation.mutateAsync(value);
  };

  const enterpriseOptions =
    enterprises?.map((enterprise) => ({
      value: enterprise.id,
      label: enterprise.name,
    })) || [];

  const handleLogout = () => {
    cookieService.removeToken();
    cookieService.removeCookie("refresh_token");

    queryClient.clear();
    navigate('/login')
  };

  return {
    user,
    enterpriseOptions,
    selectedEnterpriseId,
    handleEnterpriseChange,
    handleLogout,
  };
};
