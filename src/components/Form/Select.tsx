"use client";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

export type SelectProps = {
  name: string;
  id: string;
  label: string;
  options: Array<string>;
  rules?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  name,
  id,
  label,
  options,
  rules,
  ...props
}: SelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message?.toString();
  const errorId = useId();

  const { ...restRegister } = register(name, rules);

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label className="text-sm text-primary-100 font-semibold" htmlFor={id}>
        {label}
      </label>
      <select
        className="px-2 py-1 border border-secondary-100 rounded-sm text-2xl bg-primary-800 placeholder:text-primary-100 text-primary-100 focus:ring focus ring-secondary-200 outline-0"
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        id={id}
        {...restRegister}
        {...props}
      >
        {options.map((option, index) => {
          if (index == 0) {
            return <option key={index}>{option}</option>;
          }
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <span
        id={errorId}
        className="text-sm text-secondary-100 font-semibold italic"
      >
        {error}
      </span>
    </div>
  );
};
