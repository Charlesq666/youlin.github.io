import { motion } from "framer-motion";
import React from "react";

type Props = {
  fromLeft?: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: props.fromLeft ? -200 : 200 }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
        className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition-duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-70 duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">90%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
