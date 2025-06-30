"use client";
import { Step1 } from "@/components/MultiStepForm/Step1";
import { Step2 } from "@/components/MultiStepForm/Step2";
import { Step3 } from "@/components/MultiStepForm/Step3";
import { useMultiFormStore } from "@/stores/useMultiFormStore";

export default function Home() {
  const step = useMultiFormStore((state) => state.step);
  const setStep = useMultiFormStore((state) => state.setStep);

  return (
    <main className="flex flex-col md:flex-row items-center justify-start md:justify-around gap-4 min-h-screen py-8 px-4">
      <header className="flex flex-col md:gap-2">
        <h1 className="text-3xl md:text-6xl text-secondary-100 text-center md:text-left font-playfair-display">
          Code Challenge
        </h1>
        <h2 className="text-lg md:text-2xl text-center md:text-left">
          Multi-Step Form
        </h2>
      </header>
      <section className="bg-primary-700 p-8 w-full md:w-xl rounded-lg flex flex-col gap-4 shadow-2xl">
        <header>
          <h3 className="text-2xl md:text-4xl text-secondary-100 text-center">
            Register new users
          </h3>
          <h4 className="md:text-lg text-center">
            Fill in the fields below to add a new user to the system. You can
            click previous steps to review or update information.
          </h4>
        </header>
        <nav>
          <ul className="flex gap-2">
            {[1, 2, 3].map((key) => (
              <li
                key={key}
                onClick={() => step > key && setStep(key)}
                className={`h-2 w-full rounded-full ${
                  step == key && "animate-pulse"
                } ${
                  step >= key
                    ? "bg-secondary-100 cursor-pointer"
                    : "bg-primary-600"
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
