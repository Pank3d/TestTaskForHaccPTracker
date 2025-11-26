import { apiClient } from '../axios';
import type { Enterprise, SetEnterpriseStaffer } from './enterprise.types';

const ENTERPRISE_ENDPOINTS = {
  LIST: '/v1/management/enterprise/',
  SET_ENTERPRISE: (id: number) => `/v1/management/enterprise/${id}/set_enterprise/`,
} as const;

export const enterpriseApi = {
  getEnterprises: async (): Promise<Enterprise[]> => {
    const { data } = await apiClient.get<{ data: Enterprise[] }>(ENTERPRISE_ENDPOINTS.LIST);
    return data.data;
  },

  setEnterprise: async (enterpriseId: number): Promise<SetEnterpriseStaffer> => {
    const { data } = await apiClient.post<{ data: SetEnterpriseStaffer }>(
      ENTERPRISE_ENDPOINTS.SET_ENTERPRISE(enterpriseId)
    );
    return data.data;
  },
};
