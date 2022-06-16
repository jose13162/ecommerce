import { createStore } from "zustand";
import { IUser } from "../Models/User";

interface ProfileState {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

export const profileStore = createStore<ProfileState>((set) => {
  return {
    user: null,
    setUser: (user: IUser) => {
      set(() => {
        return {
          user,
        };
      });
    },
  };
});
