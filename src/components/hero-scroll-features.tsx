"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

const HeroScrollFeatures = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Prompt your way to <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Cloud Intelligence
              </span>
            </h1>
          </>
        }
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/claudio-main-screen.png"
            alt="Claudio main screen"
            height={720}
            width={1400}
            className="mx-auto block rounded-2xl object-cover"
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default HeroScrollFeatures; 