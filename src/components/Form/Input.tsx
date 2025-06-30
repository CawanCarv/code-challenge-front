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
    <div className="flex flex-col gap-0.5 w-full">
      <label className="text-sm text-primary-100 font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="px-2 py-1 border border-secondary-100 rounded-sm text-2xl bg-primary-800 placeholder:text-primary-100 text-primary-100 focus:ring focus ring-secondary-200 outline-0"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        id={id}
        {...restRegister}
        {...props}
      />
      <span
        id={errorId}
        className="text-sm text-secondary-100 font-semibold italic"
      >
        {error}
      </span>
    </div>
  );
};
