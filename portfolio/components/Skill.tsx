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
    <div className="relative flex">
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -200 : 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          src={skillObj.imgUrl}
          className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32"
          alt=""
          width={128}
          height={128}
        />
      </motion.div>
    </div>
  );
};

export default Skill;
