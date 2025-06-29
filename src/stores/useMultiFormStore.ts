import type { User } from "@/types/User";
import { create } from "zustand";

interface StoreState {
  step: number;
  user: User;
  prevStep: () => void;
  nextStep: () => void;
  setStep: (newStep: number) => void;
  updateUser: (data: Partial<User>) => void;
}

export const useMultiFormStore = create<StoreState>((set) => ({
  step: 1,
  user: {
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    address: "",
    number: "",
    city: "",
    state: "",
    termsAccepted: false,
  },
  prevStep: () =>
    set((state) => ({ step: state.step <= 1 ? state.step : state.step - 1 })),
  nextStep: () =>
    set((state) => ({ step: state.step >= 3 ? state.step : state.step + 1 })),
  setStep: (newStep) =>
    set((state) => ({
      step: state.step > 3 || state.step < 1 ? state.step : newStep,
    })),
  updateUser: (data: Partial<User>) =>
    set((state) => ({ user: { ...state.user, ...data } })),
}));
