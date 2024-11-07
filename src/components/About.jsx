import React, { useState } from "react";
import logoo from "../assets/ritik_black.png";

const About = () => {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("titles-content");

  const opentab = (tabname) => {
    for (let i = 0; i < 3; ++i) {
      tablinks[i].classList.remove("active");
    }
    for (let i = 0; i < 3; ++i) {
      tabcontents[i].classList.remove("active-tab");
    }
  };

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="first">
            <img src={logoo} alt="ritik" />
          </div>
          <div className="second">
            <h1>About Myself</h1>
            <p>
              I am a final-year student from Bundelkhand Institute of
              Engineering and Technology, Jhansi pursuing a Bachelor of
              Technology in Computer Science and Engineering.
              <br />
              I love competitive programming and Data Structures and have solved
              1000+ problems on different programming platforms. I always try to
              solve a problem in as many ways as possible in the most optimized
              way.
              <br />I am a passionate and agile learner with a keen interest in
              Data Structures and Web Development.
            </p>

            <div className="titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
              <p
                className={`tab-links ${
                  activeTab === "achievements" ? "active" : ""
                }`}
                onClick={() => opentab("achievements")}
              >
                Achievements
              </p>
            </div>

            <div
              className={`titles-content ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Data Structures</span>
                  <br />
                  Solved 1000+ questions
                </li>
                <li>
                  <span>Frontend Development</span>
                  <br />
                  Built two projects
                </li>
                <li>
                  <span>Backend Development</span>
                  <br />
                  Built two projects
                </li>
              </ul>
            </div>

            <div
              className={`titles-content ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  Bachelor of Technology in Computer Science and Engineering
                </li>
                <li>
                  Bundelkhand Institute of Engineering and Technology, Jhansi
                </li>
              </ul>
            </div>

            <div
              className={`titles-content ${
                activeTab === "achievements" ? "active-tab" : ""
              }`}
              id="achievements"
            >
              <ul>
                <li>
                  <span>Competitive Programming</span>
                  <br />
                  Solved 1000+ problems
                </li>
                <li>
                  <span>Projects</span>
                  <br />
                  Frontend and Backend projects completed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
