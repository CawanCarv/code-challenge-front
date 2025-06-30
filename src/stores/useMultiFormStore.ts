import type { User } from "@/types/User";
import { toSnakeCase } from "@/utils/toSnakeCase";
import { create } from "zustand";

interface StoreState {
  step: number;
  user: User;
  prevStep: () => void;
  nextStep: () => void;
  setStep: (newStep: number) => void;
  updateUser: (data: Partial<User>) => void;
  submitUser: (data: Partial<User>) => Promise<Response>;
  resetUser: () => void;
}

export const useMultiFormStore = create<StoreState>((set, get) => ({
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
      step: newStep > 3 || newStep < 1 ? state.step : newStep,
    })),
  updateUser: (data: Partial<User>) =>
    set((state) => ({ user: { ...state.user, ...data } })),
  submitUser: async (data: Partial<User>) => {
    set((state) => ({
      user: { ...state.user, ...data },
    }));
    const user = get().user;
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toSnakeCase(user)),
    });

    return response;
  },
  resetUser: () =>
    set(() => ({
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
    })),
}));
