import {createContext, useContext} from 'react';

export interface AuthContextProps {
  uId: string | null;
  isLoggedIn: boolean;
  login: (userId: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  uId: null,
  isLoggedIn: false,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);
