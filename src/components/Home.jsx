import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/ritik_black.png";

const Home = () => {
  const downloadPDF = () => {
    const driveLink =
      "https://drive.google.com/uc?export=download&id=1ThiI5xYVBDcT0L8ry4biA8FVZf2kvc-L";
    const link = document.createElement("a");
    link.href = driveLink;
    link.download = "Ritik_Porwal_resume.pdf"; // Set desired download file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>

            <span id="naming"> Hi, I'm Ritik Porwal, </span> software engineer from India.
          </motion.h1>
          <br />
          <h5>I am a software engineer working in Bengaluru, India with specialization in Full-stack MERN Development.</h5>
          <Typewriter
            options={{
              strings: ["A Developer", "A Programmar", "A Problem solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:ritikporwal090@gmail.com">Hire Me</a>
            <a href="#" onClick={downloadPDF}>
              My Resume
              {/* Projects <BsArrowUpRight /> */}
            </a>
          </div>
        </div>
      </section>
      <section>
        <img id="imgid" src={me} alt="#img" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
