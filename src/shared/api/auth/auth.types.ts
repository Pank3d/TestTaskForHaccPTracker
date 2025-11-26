export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface RefreshRequest {
  refresh: string;
}

export interface RefreshResponse {
  access: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  is_owner: boolean;
  is_superuser: boolean;
  status: string;
  tg_url: string | null;
  tariff?: {
    title: string;
    count_days: number;
    price: number;
    access_to_dt: string;
  };
}
