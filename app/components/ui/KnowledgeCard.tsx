import { FC } from "react";

export const KnowledgeCard: FC = () => {
  return (
    <div className="inline-flex flex-col space-y-5 items-center justify-start w-80 p-8 bg-white rounded-3xl">
      <p className="text-4xl font-bold">Knowledge</p>
      <p className="w-full text-sm text-center">
        Languages JavaScript, TypeScript, Solidity
      </p>
      <p className="w-full text-sm text-center">
        Frontend & Design ReactJs, Redux, React Router HTML5, CSS3, Tailwind
        CSS, Bootstrap, Figma
      </p>
      <p className="w-full text-sm text-center">
        Backend NodeJs, ExpressJs, Postgres, Sequelize, Postman, Nodemon
      </p>
      <p className="w-full text-sm text-center">
        Management Tools: Git, Npm, Github
      </p>
    </div>
  );
};
