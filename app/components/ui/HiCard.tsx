import { FC } from "react";
import { motion } from "framer-motion";

export const HiCard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="flex-col p-8 space-y-8 bg-white shadow-2xl rounded-3xl "
    >
      <p className="text-4xl font-bold">Hi 👋</p>
      <div className="space-y-4">
        <p>Welcome to my portfolio.</p>
        <p>Feel free to check my projects & contact info down below.</p>
      </div>
    </motion.div>
  );
};
