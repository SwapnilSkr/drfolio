"use client";

import { Tabs } from "@/components/ui/tabs";
import { ExperienceCard } from "./ExperienceCard";
import {
  ExperienceImages,
  ExperienceParagraphs,
} from "@/utils/componentData/ExperienceCardData";

export function Expertise() {
  const tabs = [
    {
      title: "Pulmonary",
      value: "pulmonary",
      content: (
        <ExperienceCard
          images={ExperienceImages[0]?.images}
          paragraphs={ExperienceParagraphs[0]?.paraArray}
        />
      ),
    },
    {
      title: "Allergy",
      value: "allergy",
      content: (
        <ExperienceCard
          images={ExperienceImages[1]?.images}
          paragraphs={ExperienceParagraphs[1]?.paraArray}
        />
      ),
    },
    {
      title: "Sleep Apnea",
      value: "sleepApnea",
      content: (
        <ExperienceCard
          images={ExperienceImages[2]?.images}
          paragraphs={ExperienceParagraphs[2]?.paraArray}
        />
      ),
    },
  ];

  return (
    <div
      id="expertise"
      className="xs:h-[70rem] xsm:h-[60rem] msm:h-[50rem] md:h-[70rem] [perspective:1000px] relative b flex flex-col max-w-screen-xl mx-auto w-full  items-start justify-start mt-40 mb-[250px] md:px-8"
    >
      <h1 className="text-4xl text-gray-800 font-extrabold lg:text-5xl mb-[40px]">
        Expertise
      </h1>
      <p className="mb-[40px]">
        Dr. Kaushik Saha brings a wealth of knowledge and experience in
        pulmonary care, allergy care, and sleep apnea management. His expertise
        spans the comprehensive treatment of respiratory conditions,
        personalized allergy management, and innovative approaches to improving
        sleep health. Through his dedication to patient-centered care, ongoing
        research, and professional collaboration, Dr. Kaushik Saha ensures that
        each patient receives the highest standard of care tailored to their
        unique needs. Explore the various facets of his expertise to learn how
        he can help improve your respiratory health and overall well-being.
      </p>
      <Tabs tabs={tabs} />
    </div>
  );
}
