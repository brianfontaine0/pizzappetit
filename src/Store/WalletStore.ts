import { create } from 'zustand';

type WalletStore = {
  wallet: string;
  setWallet: (wallet: string) => void;
};

export const useWalletStore = create<WalletStore>((set) => ({
  wallet: '0',
  setWallet: (wallet) => set({ wallet }),
}));