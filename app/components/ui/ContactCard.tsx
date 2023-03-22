import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { github, linkedin, mail } from "@/utils/images";
import Link from "next/link";

export const ContactCard: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="flex flex-col justify-center p-8 space-y-4 bg-white shadow-2xl rounded-3xl md:col-span-2 xl:col-span-1 xl:row-start-4"
    >
      <p className="text-xl font-bold text-center">Contact</p>
      <div className="flex justify-between h-8">
        <Link href="https://www.linkedin.com/in/agustin-lago/">
          <Image src={linkedin} alt="linkedin" className="cursor-pointer " />
        </Link>
        <Link href="mailto:lagoagustindev@gmail.com">
          <Image src={mail} alt="email" className="cursor-pointer" />
        </Link>
        <Link href="https://github.com/LagoJournal">
          <Image src={github} alt="github" className="cursor-pointer" />
        </Link>
      </div>
    </motion.div>
  );
};
