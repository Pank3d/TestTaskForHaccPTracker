export interface PositionHandbook {
  id: number;
  departments: number[];
  name: string;
  abbr: string;
  is_all_departments: boolean;
  handbook_type: string;
  created_at: string;
}

export interface PositionListResponse {
  handbook_type: string;
  records: PositionHandbook[];
}
