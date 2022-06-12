import { createStore } from "zustand";

type Theme = "light-theme" | "dark-theme";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const themeStore = createStore<ThemeState>((set) => {
  const initialTheme = localStorage.getItem("theme") as Theme || "light-theme"

  localStorage.setItem("theme", initialTheme)

  return {
    theme: initialTheme,
    toggleTheme: () => {
      set((state: ThemeState) => {
        const newTheme = state.theme === "light-theme" ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", newTheme);

        return {
          theme: newTheme,
        };
      });
    },
  };
});
