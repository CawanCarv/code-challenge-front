"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import type { ZodObject } from "zod/v4";

export const Form = ({
  children,
  submitFunction,
  formSchema,
}: {
  children: React.ReactNode;
  submitFunction: (data: Record<string, unknown>) => void;
  formSchema: ZodObject;
}) => {
  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });
  const { handleSubmit } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitFunction)}
          className="flex flex-col gap-4"
        >
          {children}
        </form>
      </FormProvider>{" "}
    </>
  );
};
