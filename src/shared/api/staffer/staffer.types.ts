import type { Position, Department } from '../enterprise';

export interface Staffer {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  abbr: string;
  handbook_type: string;
  is_user: boolean | null;
  tg_url: string | null;
  email: string;
  departments: Department[];
  status: string;
  position: Position;
  is_owner: boolean | null;
  is_all_departments: boolean;
  created_at: string;
  journal_permissions?: Record<string, unknown>;
  handbook_permissions?: Record<string, unknown>;
  checklist_permissions?: Record<string, unknown>;
}

export interface StafferListResponse {
  handbook_type: string;
  records: Staffer[];
}

export interface CreateStafferRequest {
  first_name: string;
  last_name: string;
  middle_name?: string;
  position: string;
  status: string;
  tg_url?: string;
}

export interface UpdateStafferRequest {
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  position?: string;
  status?: string;
  tg_url?: string;
  reserved_email?: string;
  departments?: number[];
}
