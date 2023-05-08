import { ExperienceType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const experiences: [ExperienceType] = [
  {
    techImgs: ["https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"],
    companylogo: 'https://charlesqimg.s3.us-east-2.amazonaws.com/20230116_153842.jpg',
    title: "Software Engineering Intern",
    company: "Amazon",
    from: "May 2021",
    to: "August 2021",
    location: "Seattle, WA",
    responsibilities: [
      "Developed a web application using React and TypeScript to help Amazon employees manage their work-life balance",
      "Implemented a REST API using AWS Lambda and API Gateway to handle CRUD operations for the application",
      "Designed a CI/CD pipeline using AWS CodePipeline to automate the deployment of the application",
      "Utilized AWS DynamoDB to store and retrieve data for the application",
      "Created a serverless backend using AWS Lambda and API Gateway to handle CRUD operations for the application",
      "Implemented a CI/CD pipeline using AWS CodePipeline to automate the deployment of the application",
      "Utilized AWS DynamoDB to store and retrieve data for the application",
      "Created a serverless backend using AWS Lambda and API Gateway to handle CRUD operations for the application",
      "Implemented a CI/CD pipeline using AWS CodePipeline to automate the deployment of the application"
    ]
  },
];

const Experience = (props: Props) => {
  return (
    <motion.div
      className="component-basic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="basic">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-basic">
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[0]} />
      </div>
    </motion.div>
  );
};

export default Experience;
