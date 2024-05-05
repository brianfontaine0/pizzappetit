import { create } from "zustand";

type OpenMenu = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useOpenMenu = create<OpenMenu>((set) => ({
  isOpen: false,
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useOpenMenu;