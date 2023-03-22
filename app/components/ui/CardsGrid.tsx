import { unBardo, soyHenry, education } from "@/utils/data";
import React from "react";
import {
  NameCard,
  HiCard,
  MeCard,
  ProjectCard,
  EducationCard,
  KnowledgeCard,
  ContactCard,
} from "./";

export const CardsGrid: React.FC = () => {
  return (
    <div className="grid w-full p-4 place-items-center">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
        <ContactCard />
      </div>
    </div>
  );
};
