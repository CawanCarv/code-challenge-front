"use client";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

export type CheckboxProps = {
  name: string;
  id: string;
  label: string;
  rules?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = ({
  name,
  id,
  label,
  rules,
  ...props
}: CheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message?.toString();
  const errorId = useId();

  const { ...restRegister } = register(name, rules);

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <div className="flex items-center justify-start gap-2">
        <input
          className="h-4 w-4"
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          id={id}
          type="checkbox"
          {...restRegister}
          {...props}
        />
        <label
          className="text-lg text-secondary-100 font-semibold"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <span id={errorId} className="text-sm text-red-500 font-semibold">
        {error}
      </span>
    </div>
  );
};
