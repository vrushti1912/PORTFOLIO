"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Natural Language Processing</li>
        <li>Python</li>
        <li>Data Visualization</li>
        <li>Data Analysis</li>
        <li>Statistics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BE in Electronics & Computer Science at FRCRCE, 2021-2024</li>
        <li>Diploma in Digital Electronics at SBMP, 2018-2021</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>SE ECS Topper, rank 1 (CGPA- 9.77)</li>
        <li>TE ECS Topper, rank 2 (CGPA- 9.5)</li>
        <li>R&D Representative of the ECS department (2022-23)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AI For Everyone</li>
        <li>Supervised ML : Classification and Regression</li>
        <li>ML For All</li>
        <li>Introduction to Virtual Reality</li>
        <li>What is Data Science</li>
        <li>Getting started with Python</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a student graduating in June 2024 and an aspiring
            data analyst. I have made projects using JavaScript,
            React, PostgreSQL, HTML, CSS, ML libraries like numpy,
            pandas, matplotlib, keras and tensor flow.
            I am a quick learner and I am always
            looking to expand my knowledge and skill set.
            I am a team player and I am excited to work
            with others to create amazing applications.
            I am actively seeking a full time data analyst role.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
