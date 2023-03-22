import { FC } from "react";
import Image from "next/image";
import {
  js,
  ts,
  solidity,
  react,
  nextjs,
  redux,
  html,
  css,
  tailwind,
  bootstrap,
  mui,
  figma,
  node,
  express,
  postgresql,
  postman,
  sequelize,
  nodemon,
  git,
  npm,
  github,
} from "../../utils/images";

export const KnowledgeCard: FC = () => {
  return (
    <div className="inline-flex flex-col items-center justify-start p-8 space-y-5 bg-white w-80 rounded-3xl">
      <p className="text-4xl font-bold">Knowledge</p>
      <div className="space-y-4">
        <p className="w-full font-bold text-center">Languages</p>
        <div className="flex h-12">
          <Image src={js} alt="javascript" />
          <Image src={ts} alt="typescript" />
          <Image src={solidity} alt="solidity" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="w-full font-bold text-center">Frontend & Design </p>
        <div className="flex h-12">
          <Image src={react} alt="ReactJs" className="h-12" />
          <Image src={nextjs} alt="nextJs" />
          <Image src={redux} alt="redux" />
        </div>
        <div className="flex h-12">
          <Image src={html} alt="html" />
          <Image src={css} alt="css" />
          <Image src={tailwind} alt="tailwind" />
        </div>
        <div className="flex h-12">
          <Image src={bootstrap} alt="bootstrap" />
          <Image src={mui} alt="materialui" />
          <Image src={figma} alt="figma" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="w-full font-bold text-center">Backend </p>
        <div className="flex h-12">
          <Image src={node} alt="nodejs" />
          <Image src={express} alt="expressjs" />
          <Image src={postgresql} alt="postgresql" />
        </div>
        <div className="flex h-12">
          <Image src={sequelize} alt="sequelize" />
          <Image src={postman} alt="postman" />
          <Image src={nodemon} alt="nodemon" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="w-full font-bold text-center">Managment Tools </p>
        <div className="flex h-12">
          <Image src={git} alt="git" />
          {/* <Image src={github} alt="github" /> */}
          <Image src={npm} alt="npm" />
        </div>
      </div>
    </div>
  );
};
