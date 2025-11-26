import { useQuery } from "@tanstack/react-query";
import { positionApi } from "@shared/api";

export const usePositions = () => {
  return useQuery({
    queryKey: ["positions"],
    queryFn: async () => {
      return await positionApi.getPositions();
    },
  });
};
