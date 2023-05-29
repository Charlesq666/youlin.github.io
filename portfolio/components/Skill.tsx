import { SkillObj } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  fromLeft?: boolean;
  skillObj: SkillObj;
};

const Skill = ( {fromLeft, skillObj} : Props) => {
  return (
    <div className="relative flex group">
      <motion.div
        initial={{ opacity: 0}}
        transition={{ duration: 1.5}}
        whileInView={{ opacity: 1}}
      >
        <Image
          priority = {true}
          src={skillObj.imgUrl}
          className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32"
          alt=""
          width={128}
          height={128}
        />
        <div className="rounded-full absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
          <p className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{skillObj.name}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
