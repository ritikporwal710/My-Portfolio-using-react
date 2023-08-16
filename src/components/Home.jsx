import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown} from "react-icons/bs";
import me from "../assets/ritik_black.png";

const Home = () => {
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
            Hi, I Am <br /> Ritik Porwal
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A programmar", "A problem solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:ritikporwal090@gmail.com">Hire Me</a>
            <a href="#work">
              My Resume
              {/* Projects <BsArrowUpRight /> */}
            </a>
          </div>

        </div>
      </section>
      <section>
        <img id = 'imgid' src={me} alt="#img" />
      </section>
      <BsChevronDown/>
    </div>
  )
};

export default Home;
