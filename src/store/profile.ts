import { createStore } from "zustand";

interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  avatar: null | {
    url: string;
  };
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProfileState {
  user: User | null;
  setUser: (user: User) => void;
}

export const profileStore = createStore<ProfileState>((set) => {
  return {
    user: null,
    setUser: (user: User) => {
      set(() => {
        return {
          user,
        };
      });
    },
  };
});
