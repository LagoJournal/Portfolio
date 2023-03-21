import { unBardo, soyHenry, education } from "@/utils/data";
import React from "react";
import {
  NameCard,
  HiCard,
  MeCard,
  ProjectCard,
  EducationCard,
  KnowledgeCard,
} from "./";

export const CardsGrid: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 place-items-center py-4">
      <HiCard />
      <NameCard />
      <MeCard />
      <ProjectCard
        company={unBardo.company}
        title={unBardo.title}
        text={unBardo.text}
        link={unBardo.link}
      />
      <ProjectCard
        company={soyHenry.company}
        title={soyHenry.title}
        text={soyHenry.text}
        link={soyHenry.link}
      />
      <EducationCard education={education} />
      <KnowledgeCard />
    </div>
  );
};
