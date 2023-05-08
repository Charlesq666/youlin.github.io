import { motion } from "framer-motion";
import React from "react";

type Props = {
  fromLeft?: boolean;
  imgUrl: string;
};

const Skill = ( {fromLeft, imgUrl} : Props) => {
  return (
    <div className="relative flex">
      <motion.img
        initial={{ opacity: 0, x: fromLeft ? -200 : 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        src={imgUrl}
        className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32"
      />
    </div>
  );
};

export default Skill;
