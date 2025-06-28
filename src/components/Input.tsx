"use client";
import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

export type InputProps = {
  name: string;
  id: string;
  label: string;
  mask?: string | Array<string>;
  rules?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  name,
  id,
  label,
  mask = "",
  rules,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message?.toString();
  const errorId = useId();

  const registerWithMask = useHookFormMask(register);

  const { ...restRegister } =
    mask == "" ? register(name, rules) : registerWithMask(name, mask, rules);

  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm text-primary-700 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-2 py-1 border border-primary-800 rounded-sm text-2xl bg-primary-100 placeholder:text-primary-600 text-primary-800 focus:ring focus ring-primary-800 outline-0"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...restRegister}
        {...props}
      />
      <label id={errorId} className="text-sm text-red-500 font-semibold">
        {error}
      </label>
    </div>
  );
};
