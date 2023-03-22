import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import photo from "../../utils/images/portrait.png";

export const MeCard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="shadow-2xl bg-main rounded-3xl md:row-span-3 xl:order-first"
    >
      <Image
        src={photo}
        className="absolute h-64 w-card rounded-tl-3xl rounded-tr-3xl"
      />
      <div className="w-full p-8 space-y-4 text-white ">
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
    </motion.div>
  );
};
