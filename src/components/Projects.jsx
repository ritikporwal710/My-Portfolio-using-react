import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import image_reptik from "../assets/reptik_image.jpg";
import image_portfolio from "../assets/portfolio_ss.jpg";
import image_wallhouse from "../assets/wallhouse_ss.jpg";
import image_expense from "../assets/expense_ss.jpg";

const Projects = () => {
  // const animations = {

  // }
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1 className="projects-title">My Latest Projects</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <section>
        <ProjectCard
          name={image_reptik}
          link={"https://ritikport.onrender.com"}
        />
        <ProjectCard
          name={image_portfolio}
          link={"https://ritikport.onrender.com"}
        />
        <ProjectCard
          name={image_expense}
          link={"https://ritikport.onrender.com"}
        />
        <ProjectCard
          name={image_wallhouse}
          link={"https://ritikport.onrender.com"}
        />
        {/* <button className="hover-button">Live Link</button> */}
      </section>
    </div>
  );
};

export default Projects;

{
  /* <h2> Projects </h2> */
}
{
  /* <section>
        <motion.div className="serviceBox1">
          <h3>5+</h3>
          <p>years Experience</p>
        </motion.div>

        <motion.div className="serviceBox2">
          <AiFillIeCircle />
          <span> Web Development</span>
        </motion.div>

        <motion.div className="serviceBox3">
          <AiFillAndroid />
          <span> App Development</span>
        </motion.div>

        <motion.div className="serviceBox4">
          <AiFillWindows />
          <span> Desktop Development</span>
        </motion.div>

        <motion.div className="serviceBox4">
          <AiFillWindows />
          <span> Desktop Development</span>
        </motion.div>
        <motion.div className="serviceBox4">
          <AiFillWindows />
          <span> Desktop Development</span>
        </motion.div>
      </section> */
}
