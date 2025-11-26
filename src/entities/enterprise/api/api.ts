import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enterpriseApi } from "@shared/api";

export const useEnterprises = () => {
  return useQuery({
    queryKey: ["enterprises"],
    queryFn: async () => {
      return await enterpriseApi.getEnterprises();
    },
  });
};

export const useSetEnterpriseMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (enterpriseId: number) => {
      return await enterpriseApi.setEnterprise(enterpriseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enterprises"] });
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
};
