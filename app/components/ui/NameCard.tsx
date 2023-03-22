import { FC } from "react";
import { motion } from "framer-motion";

export const NameCard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="flex-col p-8 space-y-4 bg-white shadow-2xl rounded-3xl xl:-order-1 xl:col-span-2 "
    >
      <p className="text-4xl font-bold">
        Agustin <br />
        Lago
      </p>
      <p className="text-base font-bold">Frontend Developer</p>
    </motion.div>
  );
};
