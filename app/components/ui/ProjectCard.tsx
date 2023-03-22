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
    <div className="flex flex-col items-end p-8 space-y-8 bg-white shadow-2xl rounded-3xl xl:col-span-2 xl:row-span-2">
      <div className="flex flex-col items-start space-y-4">
        <div className="justify-center px-4 py-2 bg-main">
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
