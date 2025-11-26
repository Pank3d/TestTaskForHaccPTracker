import { apiClient } from '../axios';
import type {
  Staffer,
  StafferListResponse,
  CreateStafferRequest,
  UpdateStafferRequest
} from './staffer.types';

const STAFFER_ENDPOINTS = {
  LIST: '/v1/handbooks/staffer/',
  DETAIL: (id: number) => `/v1/handbooks/staffer/${id}/`,
  CREATE: '/v1/handbooks/staffer/',
  UPDATE: (id: number) => `/v1/handbooks/staffer/${id}/`,
  DELETE: (id: number) => `/v1/handbooks/staffer/${id}/`,
} as const;

export const stafferApi = {
  getStaffers: async (): Promise<Staffer[]> => {
    const { data } = await apiClient.get<{ data: StafferListResponse }>(
      STAFFER_ENDPOINTS.LIST
    );
    return data.data.records;
  },

  getStaffer: async (id: number): Promise<Staffer> => {
    const { data } = await apiClient.get<{ data: Staffer }>(
      STAFFER_ENDPOINTS.DETAIL(id)
    );
    return data.data;
  },

  createStaffer: async (staffer: CreateStafferRequest): Promise<Staffer> => {
    const { data } = await apiClient.post<{ data: Staffer }>(
      STAFFER_ENDPOINTS.CREATE,
      staffer
    );
    return data.data;
  },

  updateStaffer: async (id: number, staffer: UpdateStafferRequest): Promise<Staffer> => {
    const { data } = await apiClient.patch<{ data: Staffer }>(
      STAFFER_ENDPOINTS.UPDATE(id),
      staffer
    );
    return data.data;
  },

  deleteStaffer: async (id: number): Promise<void> => {
    await apiClient.delete(STAFFER_ENDPOINTS.DELETE(id));
  },
};
