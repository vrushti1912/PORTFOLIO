"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
// import projectImg1 from "/images/projects/1.png" 

const projectsData = [
  {
    id: 1,
    title: "Tuberculosis Analyzer",
    description: "Detects whether a patient is suffering from TB or not when provided with a chext X-ray input.",
    image: "/images/projects/tb1.jpg" ,
    tag: ["All", "ML"],
    gitUrl: "https://github.com/vrushti1912/TB-Analyzer",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "English To Hindi Translator",
    description: "Translates English sentences into Hindi language by considering the entire context",
    image: "/images/projects/EngHindi2final.png",
    tag: ["All", "NLP"],
    gitUrl: "https://github.com/vrushti1912/EnglishToHindi_Translator",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Stock Price Prediction using LSTM",
    description: "Predicts Apple Inc's stock prices by using DL approach- LSTM",
    image: "/images/projects/StockPrice3.jpg",
    tag: ["All", "DL"],
    gitUrl: "https://github.com/vrushti1912/StockPricePrediction-usingLSTM",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Music Store Analysis",
    description: "A series of SQL operations analyzed the music dataset's  different aspects of the entities related to it.",
    image: "/images/projects/musicstorefinal.jpg",
    tag: ["All", "SQL"],
    gitUrl: "https://github.com/vrushti1912/Music-Store-Analysis-using-SQL",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "Feedback Insight Visualizer",
    description: "A NLP project that creates a word cloud for a given feedback provided as input.",
    image: "/images/projects/feedback5.jpg",
    tag: ["All", "NLP"],
    gitUrl: "https://github.com/vrushti1912/Feedback-Insight-Visualizer",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Diwali Sales Analysis",
    description: "Data analytics project performing EDA",
    image: "/images/projects/DiwaliSales6.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/vrushti1912/DataVisualization",
    // previewUrl: "/",
  },
  {
    id: 7,
    title: "Brain Computer Music Interface - BCMI",
    description: "A progressive web app that helps users quickly analyze their mood through their brain signals(EEG)with the help of machine learning algorithms with a remarkable accuracy rate of 97% and the web application in return recommends music to the users based on their moods.",
    image: "/images/projects/bci7.jpeg",
    tag: ["All", "ML" , "DL"],
    gitUrl: "https://github.com/vrushti1912/EEG-Mood-Classifiers-BCI",
    // previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DL"
          isSelected={tag === "DL"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NLP"
          isSelected={tag === "NLP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SQL"
          isSelected={tag === "SQL"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
