import React from "react";
import image_reptik from "../assets/reptik_image.jpg";
import image_portfolio from "../assets/reptik_image.jpg";

const ProjectCard = ({ name, link }) => {
  const submithandler = () => {
    window.open(link, "_blank");
  };
  return (
    // <div className='card-cover'>
    <img src={name} alt="" onClick={submithandler} />
    // </div>
  );
};

export default ProjectCard;
