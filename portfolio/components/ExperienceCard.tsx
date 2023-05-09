import { ExperienceType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="max-h-[600px] md:max-h-[1200px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 overflow-hidden">
      <a
        href={experience.companyUrl}
        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full"
      >
        <Image
          className="rounded-full object-cover object-center"
          src={experience.companylogo}
          alt=""
          width={200}
          height={200}
        />
      </a>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{experience.title}</h4>
        <p className="text-xl font-bold md:text-2xl mt-1">{experience.company}</p>

        <div className="flex my-2 gap-2 flex-wrap">
          {experience.techImgs.map((imgUrl, index) => (
            <Image
              className="rounded-full object-center flex-shrink-0 w-8 h-8 md:w-10 md:h-10"
              src={imgUrl}
              alt=""
              key={index}
              width={40}
              height={40}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {experience.from} - {experience.to}
        </p>

        <ul className="list-disc space-y-4 md:ml-5 text-md md:text-lg overflow-y-scroll max-h-[300px] scrollbar-basic">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>
                {responsibility}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
