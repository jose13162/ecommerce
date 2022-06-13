import cookies from "react-cookies";
import { createStore } from "zustand";

interface TokenState {
  token: string;
  setToken: (token: string) => void;
}

export const tokenStore = createStore<TokenState>((set) => {
  const initialToken = cookies.load("token");

  return {
    token: initialToken,
    setToken: (token: string) => {
      set(() => {
        cookies.save("token", token, {
          maxAge: 30 * 24 * 60 * 60,
        });
        
        return {
          token,
        };
      });
    },
  };
});
