import { ExperienceType } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const experienceObjs: ExperienceType[] = [
  {
    companyUrl: 'https://discover-e.org',
    techImgs: ["/skills/aws.svg", "/skills/react.svg", "/skills/ts.png", "/skills/fastapi.svg", "skills/mongodb.svg", "skills/ec2.png", "skills/python.svg", "skills/route53.png", "/skills/html.png", "skills/css.png","skills/docker.png"],
    companylogo: '/experiences/discover-e.svg',
    title: "Lead Software Engineer",
    company: "Discover-E",
    from: "Jan 2023",
    to: "Present",
    location: "Madison, WI",
    responsibilities: [
      "Designed and implemented MongoDB database to efficiently manage and store data with high variability",
      "Developed a backend service using FastAPI that is hosted on EC2, enabling concurrent and stable requests to the database",
      "Engineered an automated ETL pipeline for daily web scraping and data extraction, optimizing data processing workflows and ensuring consistent, up-to-date information for end-users",
      "Self-learned, wrote, and deployed a user-friendly front-end interface that is built using React, Typescript, and TailwindCSS by utilizing the figma design sheet that is created by the UI/UX team all within 3 weeks",
      "Successfully led and managed a team of 5, utilizing Agile methodologies to ensure efficient project delivery, seamless collaboration, and continuous improvement",
      "Implemented a CI/CD pipeline using CircleCI to automate the deployment of the application"
    ]
  }, 
  {
    companyUrl: 'https://easyjobs.so',
    techImgs: ["/skills/aws.svg", "/skills/vue.png", "/skills/ts.png", "/skills/golang.png", "skills/mysql.png", "skills/python.svg", "skills/github.png", "skills/pandas.png", "skills/docker.png", "skills/awslambda.png", "skills/elasticsearch.png", "skills/flask.png", "skills/scrapy.png", "skills/scikit-learn.png"],
    companylogo: '/experiences/easyjobs.png',
    title: "Software Engineer",
    company: "EasyJobs",
    from: "Jan 2022",
    to: "Dec 2022",
    location: "Madison, WI",
    responsibilities: [
      "Building a new ETL pipeline that is capable of handling daily data updating of 3 million data records using AWS Lambda, AWS S3 and Serverless Framework",
      "Building an api endpoint to receive scraped data from AWS by building a RESTful service using python flask",
      "Construct a comprehensive testing suite and build an automated testing pipeline, which integrated pytest and CircleCI, triggered automatically and significantly reduced time to manual testing",
      "Writing scripts to automate ElasticSearch query generation, providing daily database integrity checking by directly sending data statistics to slack by utilizing api endpoints.",
      "Building and maintaining mysql databases as a temperamental storage to store daily scraping results, preventing it from directly transferring to production, adding a layer of protection to data",
      "Improve user experience by building filter functionality of different searches, which is built using Google Map SDKs, and BertTopic Model to create classification for data"
    ]
  }
];

const Experiences = (props: Props) => {
  return (
    <motion.div
      className="component-basic"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h3 className="basic">
        Experiences
      </h3>

      <div className="w-full flex gap-5 overflow-x-scroll snap-x snap-mandatory scrollbar-basic max-h-[80%]">
        {experienceObjs.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
