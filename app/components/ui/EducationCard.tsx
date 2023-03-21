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
    <div className="flex flex-col space-y-4 items-center w-80 p-8 bg-main rounded-3xl shadow-2xl text-white">
      <p className="text-4xl font-bold ">Education</p>

      <p className="text-center ">{education[current].title}</p>
      {education[current].text.map((e) => (
        <p className="">{e}</p>
      ))}
      <div className="w-full flex justify-between">
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
