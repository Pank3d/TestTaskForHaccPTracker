import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  stafferApi,
  type CreateStafferRequest,
  type UpdateStafferRequest,
} from "@shared/api";

export const useStaffers = () => {
  return useQuery({
    queryKey: ["staffers"],
    queryFn: async () => {
      return await stafferApi.getStaffers();
    },
  });
};

export const useStaffer = (id: number) => {
  return useQuery({
    queryKey: ["staffer", id],
    queryFn: async () => {
      return await stafferApi.getStaffer(id);
    },
    enabled: !!id,
  });
};

export const useCreateStafferMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (staffer: CreateStafferRequest) => {
      return await stafferApi.createStaffer(staffer);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffers"] });
      toast.success("Сотрудник успешно создан");
    },
    onError: () => {
      toast.error("Ошибка при создании сотрудника");
    },
  });
};

export const useUpdateStafferMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      staffer,
    }: {
      id: number;
      staffer: UpdateStafferRequest;
    }) => {
      return await stafferApi.updateStaffer(id, staffer);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["staffers"] });
      queryClient.invalidateQueries({ queryKey: ["staffer", variables.id] });
      toast.success("Сотрудник успешно обновлен");
    },
    onError: () => {
      toast.error("Ошибка при обновлении сотрудника");
    },
  });
};

export const useDeleteStafferMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return await stafferApi.deleteStaffer(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffers"] });
      toast.success("Сотрудник успешно удален");
    },
    onError: () => {
      toast.error("Ошибка при удалении сотрудника");
    },
  });
};
