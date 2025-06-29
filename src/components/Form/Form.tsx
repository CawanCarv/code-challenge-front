"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import type { ZodObject } from "zod/v4";
import { Button } from "../Button";
import { FaSpinner } from "react-icons/fa";

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
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitFunction)}
          className="flex flex-col items-center justify-center gap-4"
        >
          {children}
          <Button
            type="submit"
            className={!isValid ? "bg-red-700" : ""}
            disabled={!isValid}
          >
            {isSubmitting ? <FaSpinner className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
