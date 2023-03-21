import Link from "next/link";
import { FC } from "react";

interface Props {
  company: string;
  title: string;
  text: string;
  link: string;
}

export const ProjectCard: FC<Props> = ({ company, title, text, link }) => {
  return (
    <div className="flex flex-col space-y-8 items-end w-80 p-8 bg-white rounded-3xl shadow-2xl">
      <div className="flex flex-col space-y-4 items-start">
        <div className="justify-center py-2 px-4 bg-main">
          <p className="font-bold text-white">{company}</p>
        </div>
        <p className="text-2xl font-bold ">{title}</p>
        <p className="w-full text-sm">{text}</p>
      </div>
      <div className="px-4 py-2 border-2 rounded-full border-main">
        <Link href={link} className="text-sm font-medium ">
          VISIT SITE
        </Link>
      </div>
    </div>
  );
};
