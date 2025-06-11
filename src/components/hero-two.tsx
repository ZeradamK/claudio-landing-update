"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

const HeroTwo = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="relative container py-32 flex flex-col items-center justify-center">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="font-anton text-3xl font-semibold tracking-tight text-white md:text-7xl">
            Trained by Thousands of Solutions
          </h1>
          <p className="my-7 max-w-4xl tracking-tight font-light text-white md:text-xl font-size-14">
            Claudio leverages a vast library of real-world cloud architectures, DevOps patterns, and intent recognition models—empowering you to automate, optimize, and innovate with confidence.
          </p>
        </header>

        <Badge
          variant="outline"
          className="mx-auto mt-10 flex w-fit cursor-pointer items-center justify-center rounded-full py-1 pr-3 pl-2 font-normal transition-all ease-in-out hover:gap-3"
          style={{ borderWidth: '0.1rem', borderColor: '#e5e7eb' }}
        >
          <img
            src="/train-icon1.png"
            alt="Train Icon 1"
            className="relative -mr-5 rounded-full border md:size-10 size-8 bg-white p-1"
          />
          <img
            src="/train-icon2.png"
            alt="Train Icon 2"
            className="relative -mr-5 rounded-full border md:size-10 size-8 bg-white p-1"
          />
          <img
            src="/train-icon3.png"
            alt="Train Icon 3"
            className="relative -mr-5 rounded-full border md:size-10 size-8 bg-white p-1"
          />
          <p className="ml-6 tracking-tight capitalize md:text-lg text-white">
            {" "}
            Module trained by <span className="font-bold text-white">
              10k+
            </span>{" "}
            architecture patterns.
          </p>
        </Badge>
      </div>
    </section>
  );
};

export default HeroTwo; 