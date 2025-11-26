import { apiClient } from '../axios';
import type { PositionHandbook, PositionListResponse } from './position.types';

const POSITION_ENDPOINTS = {
  LIST: '/v1/handbooks/position/',
} as const;

export const positionApi = {
  getPositions: async (): Promise<PositionHandbook[]> => {
    const { data } = await apiClient.get<{ data: PositionListResponse }>(
      POSITION_ENDPOINTS.LIST
    );
    return data.data.records;
  },
};
