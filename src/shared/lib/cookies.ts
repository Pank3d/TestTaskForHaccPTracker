import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

export const cookieService = {
  getToken: (): string | undefined => {
    return Cookies.get(TOKEN_KEY);
  },

  setToken: (token: string, days: number = 7): void => {
    Cookies.set(TOKEN_KEY, token, {
      expires: days,
      secure: true,
      sameSite: 'strict'
    });
  },

  removeToken: (): void => {
    Cookies.remove(TOKEN_KEY);
  },

  getCookie: (key: string): string | undefined => {
    return Cookies.get(key);
  },

  setCookie: (key: string, value: string, days: number = 7): void => {
    Cookies.set(key, value, {
      expires: days,
      secure: true,
      sameSite: 'strict'
    });
  },

  removeCookie: (key: string): void => {
    Cookies.remove(key);
  },
};
