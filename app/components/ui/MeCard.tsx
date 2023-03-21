import Image from "next/image";
import { FC } from "react";
import photo from "../../utils/images/portrait.png";

export const MeCard: FC = () => {
  return (
    <div className=" w-80 bg-main rounded-3xl shadow-2xl">
      <Image
        src={photo}
        className="w-80 h-64 rounded-tl-3xl rounded-tr-3xl absolute"
      />
      <div className="p-8 space-y-4 w-full text-white ">
        <p className="text-4xl font-bold ">About me</p>
        <p>
          Web Development allowed me to find an optimal balance between two very
          strong parts of my personality, logical thinking and creativity.
        </p>
        <p>
          I find that positions where I can participate in problem solving and
          adapt to the requirements of the product to be developed and the
          market suit me best, consolidating my knowledge and learning new
          technologies along the way.
        </p>
      </div>
    </div>
  );
};
