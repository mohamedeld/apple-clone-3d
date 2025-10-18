import { create } from "zustand";

type MacStore = {
  color: string;
  scale: number;
  setColor: (c: string) => void;
  setScale: (s: number) => void;
};

const useMacStore = create<MacStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),
  scale: 0.08,
  setScale: (scale: number) => set({ scale }),
  reset: () =>
    set({
      color: "#2e2c2e",
      scale: 0.08,
    }),
}));

export default useMacStore;
