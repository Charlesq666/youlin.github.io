import { ExperienceType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  experience: ExperienceType;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] snap-center bg-tertiary text-primary p-10 overflow-hidden">
      <a
        href={experience.companyUrl}
        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full"
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
        <h4 className="text-center text-xl md:text-3xl font-light">{experience.title}</h4>
        <p className="text-lg font-bold md:text-2xl mt-1">{experience.company}</p>

        <div className="flex my-2 gap-2 overflow-x-hidden hover:overflow-x-visible">
          {experience.techImgs.map((imgUrl, index) => (
            <Image
              className="rounded-full object-center flex-shrink-0 w-6 h-6 md:w-8 md:h-8"
              src={imgUrl}
              alt=""
              key={index}
              width={40}
              height={40}
            />
          ))}
        </div>

        <p className="text-sm md:text-md uppercase py-2 md:py-5 text-gray-500">
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
