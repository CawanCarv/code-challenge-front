"use client";
import { Step1 } from "@/components/MultiStepForm/Step1";
import { Step2 } from "@/components/MultiStepForm/Step2";
import { Step3 } from "@/components/MultiStepForm/Step3";
import { useMultiFormStore } from "@/stores/useMultiFormStore";

export default function Home() {
  const step = useMultiFormStore((state) => state.step);
  const setStep = useMultiFormStore((state) => state.setStep);

  return (
    <main className="flex flex-col items-center justify-start gap-4 min-h-screen py-8 px-4">
      <header>
        <h1 className="text-3xl uppercase text-primary-800 font-semibold text-center">
          Code Challenge
        </h1>
        <h2 className="text-xl uppercase text-primary-700 font-semibold text-center">
          MultiStep Form
        </h2>
      </header>
      <section className="">
        <nav>
          <ul className="flex gap-2">
            {[1, 2, 3].map((key) => (
              <li
                key={key}
                onClick={() => step > key && setStep(key)}
                className={`h-2 w-full rounded-full ${
                  step == key && "animate-pulse"
                } ${
                  step >= key ? "bg-sky-500 cursor-pointer" : "bg-primary-600"
                }`}
              ></li>
            ))}
          </ul>
        </nav>
        {step == 1 && <Step1 />}
        {step == 2 && <Step2 />}
        {step == 3 && <Step3 />}
      </section>
    </main>
  );
}
