export interface Position {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface CurrentStaffer {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  abbr: string;
  handbook_type: string;
  tg_url: string | null;
  email: string;
  departments: Department[];
  status: string;
  position: Position;
  is_user: boolean;
  is_owner: boolean;
  is_all_departments: boolean;
  created_at: string;
}

export interface Enterprise {
  id: number;
  name: string;
  information: string | null;
  current_staffer: CurrentStaffer;
  tz: number;
}

export interface HandbookPermissions {
  STAFFER?: {
    CREATE_HANDBOOK: boolean;
    DELETE_HANDBOOK: boolean;
    UPDATE_HANDBOOK: boolean;
    READ_HANDBOOK: boolean;
  };
  [key: string]: any;
}

export interface SetEnterpriseStaffer {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  abbr: string;
  handbook_type: string;
  is_user: boolean;
  tg_url: string | null;
  email: string;
  departments: Department[];
  status: string;
  position: Position;
  is_owner: boolean;
  is_all_departments: boolean;
  created_at: string;
  journal_permissions: Record<string, any>;
  handbook_permissions: HandbookPermissions;
  checklist_permissions: Record<string, any>;
}
