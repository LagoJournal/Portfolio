import { FC } from "react";

export const NameCard: FC = () => {
  return (
    <div className="flex-col space-y-4 w-80 p-8 bg-white rounded-3xl shadow-2xl">
      <p className="text-4xl font-bold">
        Agustin <br />
        Lago
      </p>
      <p className="text-base font-bold">Frontend Developer</p>
    </div>
  );
};
