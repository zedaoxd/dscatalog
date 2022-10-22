import { createContext } from "react";
import { TokenData } from "utils/auth";

export type AuthContextData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (AuthContextData: AuthContextData) => void;    
};

export const AuthContext = createContext<AuthContextType>({
  authContextData: {
      authenticated: false,
  },
  setAuthContextData: () => null 
});

