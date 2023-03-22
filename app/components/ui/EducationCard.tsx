import { FC, useState } from "react";
import Image from "next/image";
import arrow from "../../utils/images/arrow.svg";

interface Props {
  education: {
    title: string;
    text: string[];
  }[];
}

export const EducationCard: FC<Props> = ({ education }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    current !== 0 ? setCurrent(current - 1) : setCurrent(education.length - 1);
  };
  const handleNext = () => {
    current !== education.length - 1 ? setCurrent(current + 1) : setCurrent(0);
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4 text-white shadow-2xl w-80 bg-main rounded-3xl">
      <p className="text-4xl font-bold ">Education</p>

      <p className="text-center ">{education[current].title}</p>
      {education[current].text.map((e) => (
        <p className="" key={e}>
          {e}
        </p>
      ))}
      <div className="flex justify-between w-full">
        <Image
          src={arrow}
          className="rotate-180 cursor-pointer"
          onClick={handlePrev}
        />
        <Image src={arrow} className="cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
};
