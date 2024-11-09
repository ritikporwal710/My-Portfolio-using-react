import React from 'react'
import data from "../assets/data.json";
const Achievements = () => {
  return (
    <div id='achievements'>
        <div className="timelineBox">
            {
                data.projects.map((item,index) => (
                    <TimelineItem heading={item.title} text={item.date} index={index}
                    key={item.title}/>
                ))
            }

        </div>
    </div>
  );
};

const TimelineItem = ({heading,text,index}) => 
<div
 className={ `timelineItem ${
    index%2 ===0? "leftTimeline" : "rightTimeline" }`}>

        <div>
        <h3 id = "achieved">{heading}</h3>
        <p id='date'>{text}</p>
        </div>
    </div>

export default Achievements;